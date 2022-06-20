
import { Link } from 'react-router-dom'
import Layout from '../layout/Layout'
import NavbarPerfil from '../Navbar/NavbarPerfil'

import React, { Component } from 'react';
import axios from 'axios';
 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      prestamos: [],
      pos: null,
      titulo: 'Nuevo',
      id: 0,
      idLibro: 0,
      idUsuario: 0,
      fecPrestamo: '',
      fecDevolucion: ''

    })
    this.cambioIdLibro = this.cambioIdLibro.bind(this);
    this.cambioIdUsuario = this.cambioIdUsuario.bind(this);
    this.cambioFecPrestamo = this.cambioFecPrestamo.bind(this);
    this.cambioFecDevolucion = this.cambioFecDevolucion.bind(this);
    this.mostrar = this.mostrar.bind(this);
    this.eliminar = this.eliminar.bind(this);
    this.guardar = this.guardar.bind(this);
  }
  render() {
    return (
    <div class="container ">
      <h1 class="text-center">Lista de Prestamos</h1>
      <table class="table table-striped table-dark text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Id Libro</th>
            <th>Id Cliente</th>
            <th>Inicio de Prestamo</th>
            <th>Fin de Prestamo</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.state.prestamos.map( (prestamo,index) =>{
            return (
              <tr key={prestamo.id}>
                <td>{prestamo.id}</td>
                <td>{prestamo.idLibro}</td>
                <td>{prestamo.idUsuario}</td>
                <td>{prestamo.fecPrestamo}</td>
                <td>{prestamo.fecDevolucion}</td>
                <td>
                  <button class="btn btn-success" onClick={()=>this.mostrar(prestamo.id,index)}>Editar</button>
                </td>
                <td>
                  <button class="btn btn-danger" onClick={()=>this.eliminar(prestamo.id)}>Eliminar</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <hr />
      <h1>{this.state.titulo}</h1>
      <form onSubmit={this.guardar}>
        <input type="hidden" value={this.state.id}></input>
        <p>
          Ingrese Id del Libro:
          <input type="text" value={this.state.idLibro} onChange={this.cambioIdLibro}></input>
        </p>
        <p>
          Ingrese Id del Cliente:
          <input type="text" value={this.state.idUsuario} onChange={this.cambioIdUsuario}></input>
        </p>
        <p>
          Fecha de Prestamo:
          <input type="date" value={this.state.fecPrestamo} onChange={this.cambioFecPrestamo}></input>
        </p>
        <p>
          Fecha de Devolución:
          <input type="date" value={this.state.fecDevolucion} onChange={this.cambioFecDevolucion}></input>
        </p>
        <p><input type="submit"></input></p>
      </form>
    </div>)
  }
  //para cargar la lista de series
  componentWillMount(){
    axios.get('http://127.0.0.1:8000/prestamos/')
    .then(res => {
      this.setState({ prestamos: res.data })
    });
  }

  cambioIdLibro(e){
    this.setState({
      idLibro: e.target.value
    })
  }

  cambioIdUsuario(e){
    this.setState({
      idUsuario: e.target.value
    })
  }

  cambioFecPrestamo(e){
    this.setState({
      fecPrestamo: e.target.value
    })
  }

  cambioFecDevolucion(e){
    this.setState({
      fecDevolucion: e.target.value
    })
  }

  //obtiene y popula los datos de un registro:
  mostrar(cod, index){
    axios.get('http://127.0.0.1:8000/prestamos/'+cod+'/')
    .then(res=>{
      this.setState({
        pos: index,
        titulo: 'Editar',
        id: res.data.id,
        idLibro: res.data.idLibro,
        idUsuario: res.data. idUsuario,
        fecPrestamo: res.data.fecPrestamo,
        fecDevolucion: res.data.fecDevolucion
      })
    });
  }

  guardar(e){
    e.preventDefault();
    let cod = this.state.id;
    let datos = {
      idLibro: this.state.idLibro,
      idUsuario: this.state.idUsuario,
      fecPrestamo: this.state.fecPrestamo,
      fecDevolucion: this.state.fecDevolucion
    }
    if(cod>0){//Editamos un registro
      axios.put('http://127.0.0.1:8000/prestamos/'+cod+'/',datos)
      .then(res =>{
        let indx = this.state.pos;
        this.state.prestamos[indx] = res.data;
        var temp = this.state.prestamos;
        this.setState({
          pos: null,
          titulo: 'Nuevo',
          id: 0,
          idLibro: 0,
          idUsuario: 0,
          fecPrestamo: '',
          fecDevolucion: '',
          prestamos: temp
        });
      }).catch((error)=>{
        console.log(error.toString());
      });
    }else{//Nuevo registro
      axios.post('http://127.0.0.1:8000/prestamos/',datos)
      .then(res=>{
        this.state.prestamos.push(res.data);
        var temp = this.state.prestamos;
        this.setState({
          id:0,
          idLibro: 0,
          idUsuario: 0,
          fecPrestamo: '',
          fecDevolucion: '',
          prestamos: temp
        }).catch((error)=>{
          console.log(error.toString());
        })
      })
    }
  }


  eliminar(cod){
    let rpta = window.confirm("Desea eliminar?");
    if(rpta){
      axios.delete('http://127.0.0.1:8000/prestamos/'+cod+'/')
      .then(res => {
        var temp = this.state.prestamos.filter((prestamo)=>prestamo.id !== cod);
        this.setState({
          prestamos: temp
        })
      })
    }
  }

}
export default App;
