import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Layout from '../layout/Layout'
import NavbarPerfil from '../Navbar/NavbarPerfil'

class PerfilCIPage extends Component {



  componentWillMount(){
    
    //var arrayNombres=[];
    const items=JSON.parse(localStorage.getItem('user-info'));
    console.log("Usuario ID: "+items.id)
    axios.get('http://localhost:8080/users/'+items.id+'/cursoUser/')
    .then(res => {
      console.log(res.data)
      this.setState({ cursosDetail: res.data._embedded.cursoUsers })
      
      var array = res.data._embedded.cursoUsers
      
      console.log(array)
      var arrayUnido=[]
      var x=0; 
      let fillArray = async () => {   
      for(var i=0;i<array.length;i++){
        console.log("Soy valor de i: "+i)
        console.log(array[i])         
        console.log(array[i]['_links'].curso.href)
                
          await axios.get(array[i]['_links'].curso.href)
          .then(res => {
            console.log("valor de i: "+i+" data "+res.data.name)
            console.log("Soy valor de x: "+x)
            
              arrayUnido.push({cursoDetail: array[x],
                cursoNombre: JSON.parse(JSON.stringify(res.data.name))
              })
            

            x++;
            this.setState({ cursosDetailUnidoNombreCurso: arrayUnido})
          }).catch(err => {
            console.log(err);
         });  
      }
    }
    fillArray()
    })    
  }


  constructor(props) {
    super(props);
    this.state=({
        cursosDetail: [],
        cursosDetailNombres: [],
        cursosDetailUnidoNombreCurso: []
      
    })
  }
  
render() {
    return (
        <div className="text-center">
            <Layout>
            <header className='header'>
                <div>
                    <img className="imgperfil" src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'/>
                </div>
           </header>
           
           <NavbarPerfil>
           <h1>Lista de Detalle de Cursos</h1>
                    {console.log(this.state.cursosDetailUnidoNombreCurso)}
                    
                    
                    {this.state.cursosDetailUnidoNombreCurso.map( (cursosDetailUnidoNombreCurso,index1) =>{
                        //{console.log(cursosDetailUnidoNombreCurso)} 
                         
                        return (
                            
                        <><div class="row">
                            <div class="col-5">
                                <div class="card">
                                    <img src="https://i.ytimg.com/vi/Q3JBvLOzL0o/mqdefault.jpg" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{cursosDetailUnidoNombreCurso.cursoNombre}</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Click Aquí</a>
                                    </div>
                                </div>
                                <div class="row py-3">

                                </div>
                            </div><div class="col-3">
                                    <div class="card fondo-card">
                                        <div class="card-body">
                                            <h6></h6>
                                            <p>¿Quiere ver los detalles de las notas? haga click aquí</p>
                                           <p>Promedio Actual: {cursosDetailUnidoNombreCurso.cursoDetail['promedio']}</p> 
                                            <Link to="/detalle_notas">
                                                <button class="btn btn-info">Ver detalles</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div></div></>
                        );
                    })}
                <hr />

           </NavbarPerfil>
            </Layout>
        </div>
    ) 
}
}

export default PerfilCIPage