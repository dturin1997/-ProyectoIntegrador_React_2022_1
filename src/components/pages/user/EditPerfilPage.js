import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Layout from '../layout/Layout'
import NavbarPerfil from '../Navbar/NavbarPerfil'
import * as yup from 'yup';
import axios from 'axios';

const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const validationSchema = yup.object({
  username: yup.string().min(3,"Ingresa tu ingresa tu username").required("¡Por favor ingresa tu username!"),
  email: yup.string().email("Ingresa tu ingresa tu email address").required(),
  password:yup.string().matches(PASSWORD_REGEX,"Please enter a validate password").required(),
  confirmPassword: yup
  .string()
  .required("Por favor confirma tu contraseña")
  .when("password",{
    is: val => (val && val.length > 0 ? true : false),
    then: yup.string().oneOf([yup.ref("password")],"La contraseña no coincide")
  }),
  first_name:yup.string().min(3,"Ingresa tu nombre").required("¡Por favor ingresa tu nombre!"),
  last_name:yup.string().min(3,"Ingresa tu apellido ").required("¡Por favor ingresa tu apellido!"),
  birthday:yup.string().min(10,"Ingresa tu fecha de nacimiento").required("¡Por favor ingresa tu fecha de nacimiento!")
})

class EditPerfilPage extends Component {
    constructor(props) {
      super(props);
      this.state = ({
        prestamos: [],
        pos: null,
        titulo: 'Editar',
        username: '',
        email: '',
        first_name: '',
        last_name: '',
        birthday: '2022-02-02'
  
      })
      this.cambioUsername = this.cambioUsername.bind(this);
      this.cambioEmail = this.cambioEmail.bind(this);
      this.cambioFirstName = this.cambioFirstName.bind(this);
      this.cambioLastName = this.cambioLastName.bind(this);
      this.cambioBirthday = this.cambioBirthday.bind(this);
      this.guardar = this.guardar.bind(this);
    }
    render() {
      return (
      <div class="container ">
        <h1 class="text-center">Lista de Prestamos</h1>
        <div><button onClick={this.mostrar}>Click Aqui</button></div>
        <h1>{this.state.titulo}</h1>
        <form onSubmit={this.guardar}>
          <input type="hidden" value={this.state.id}></input>
          <p>
            Ingrese Id del Libro:
            <input type="text" value={this.state.username} onChange={this.cambioUsername}></input>
          </p>
          <p>
            Ingrese Id del Cliente:
            <input type="text" value={this.state.email} onChange={this.cambioEmail}></input>
          </p>
          <p>
            Fecha de Prestamo:
            <input type="date" value={this.state.first_name} onChange={this.cambioFirstName}></input>
          </p>
          <p>
            Fecha de Devolución:
            <input type="date" value={this.state.last_name} onChange={this.cambioLastName}></input>
          </p>
          <p>
            Fecha de Devolución:
            <input type="date" value={this.state.birthday} onChange={this.cambioBirtday}></input>
          </p>
          <p><input type="submit"></input></p>
        </form>
      </div>)
    }
    //para cargar la lista de series
    componentWillMount(){
    const items=JSON.parse(localStorage.getItem('user-info'));
      axios.get('http://127.0.0.1:8000/users/'+items.id)
      .then(res => {
        this.setState({ prestamos: res.data })
      });
    }
  
    cambioUsername(e){
      this.setState({
        username: e.target.value
      })
    }
  
    cambioEmail(e){
      this.setState({
        email: e.target.value
      })
    }
  
    cambioFirstName(e){
      this.setState({
        first_name: e.target.value
      })
    }
  
    cambioLastName(e){
      this.setState({
        last_name: e.target.value
      })
    }

    cambioBirthday(e){
        this.setState({
          birthday: e.target.value
        })
      }
  
    //obtiene y popula los datos de un registro:
    mostrar(){
        const items=JSON.parse(localStorage.getItem('user-info'));
      axios.get('http://127.0.0.1:8000/users/'+items.id+'/')
      .then(res=>{
        this.setState({
          titulo: 'Editar',
          username: res.data.username,
          email: res.data.email,
          first_name: res.data. first_name,
          last_name: res.data.last_name,
          birthday: res.data.birthday
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
  export default EditPerfilPage;