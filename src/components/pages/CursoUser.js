import React, { Component } from 'react';
import axios from 'axios';



class App extends Component {

    
  componentWillMount(){
    
    //var arrayNombres=[];
    

    axios.get('http://localhost:8080/users/1/cursoUser/')
    .then(res => {
      console.log(res.data)
      this.setState({ cursosDetail: res.data._embedded.cursoUsers })
      
      var array = res.data._embedded.cursoUsers
      
      console.log(array)
            
      //globalThis.arrayNombres=[]
      //var arrayNombres=[]
      var arrayUnido=[]
      //var arrayDetalle=[]
      var x=0;
      //this.setState({ cursosDetailNombres: [] })
      /* 
      array.forEach(function(valor,inidice) => {
        
      });
      */ 
      let fillArray = async () => {   
      for(var i=0;i<array.length;i++){
        console.log("Soy valor de i: "+i)
        console.log(array[i])         
        console.log(array[i]['_links'].curso.href)
                
          await axios.get(array[i]['_links'].curso.href)
          .then(res => {
            console.log("valor de i: "+i+" data "+res.data.name)
            console.log("Soy valor de x: "+x)
            //arrayDetalle.push(array[x])
            
            //arrayNombres.push(JSON.parse(JSON.stringify(res.data.name)))
            //window.arrayNombres=[]
            //window.arrayNombres.push(JSON.parse(JSON.stringify(res.data.name)))
            //arrayNombres.push(JSON.parse(JSON.stringify(res.data.name)))
            
              arrayUnido.push({cursoDetail: array[x],
                cursoNombre: JSON.parse(JSON.stringify(res.data.name))
              })
            
            /*
            arrayUnido.push({cursoDetail: array[x],
              cursoNombre: JSON.parse(JSON.stringify(res.data.name))
            })
            */
            x++;
            //console.log(arrayNombres)
            //this.setState({ cursosDetailNombres: arrayNombres })
            this.setState({ cursosDetailUnidoNombreCurso: arrayUnido})
          }).catch(err => {
            console.log(err);
         });  
      }
    }
    fillArray()
      //this.setState({ cursosDetailNombres: arrayNombres })
      //console.log(arrayNombres)
      //arrayNombres=[]
      //console.log(arrayNombres)
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
    <div>
      <h1>Lista de Detalle de Cursos</h1>
      
      {this.state.cursosDetailNombres.map( (cursosDetailNombre) =>{
            return (
                <p>{cursosDetailNombre.cursoNombre}</p>
            )  
        })}
      
      
      <table border="1">
        <thead>
          <tr>
            <th>Curso</th>
            <th>Curso</th>
            <th>Nota 1</th>
            <th>Nota 2</th>
            <th>Nota 3</th>
            <th>Promedio</th>
            <th>Categoria</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
        
        {console.log(this.state.cursosDetailUnidoNombreCurso)}
        
          
          {this.state.cursosDetailUnidoNombreCurso.map( (cursosDetailUnidoNombreCurso,index1) =>{
            //{console.log(cursosDetailUnidoNombreCurso)}                             
            return (
              <tr>
                  <td>{cursosDetailUnidoNombreCurso.cursoNombre}</td>
                  <td>{cursosDetailUnidoNombreCurso.cursoNombre}</td>
                 <td>{cursosDetailUnidoNombreCurso.cursoDetail['nota1']}</td>
                 <td>{cursosDetailUnidoNombreCurso.cursoDetail['nota2']}</td> 
                 <td>{cursosDetailUnidoNombreCurso.cursoDetail['nota3']}</td> 
                 <td>{cursosDetailUnidoNombreCurso.cursoDetail['promedio']}</td>
                 <td></td>              
                 <td></td>              
              </tr>
            
            );
           
          })}

        
        </tbody>
      </table>
      <hr />
      
    </div>
    )
  }
}
export default App;

/*
{console.log(this.state.cursosDetail)}
        {console.log(this.state.cursosDetailNombres)}

<td>{cursosDetailUnidoNombreCurso.cursoDetail['_links'].curso.href}</td>
                
                
                
                
                <td>{cursosDetailUnidoNombreCurso.cursosDetail['nota1']}</td> 
                <td>{cursosDetailUnidoNombreCurso.cursosDetail['nota2']}</td> 
                <td>{cursosDetailUnidoNombreCurso.cursosDetail['nota3']}</td>
                <td>{cursosDetailUnidoNombreCurso.cursosDetail['promedio']}</td>  
                <td></td>
                <td></td> 

this.setState({ cursosDetailUnidoNombreCurso: {
              cursoDetail: res.data,
              cursoNombre: JSON.parse(JSON.stringify(res.data.name))
            }

<table>
                        <tr>
                            <td>{cursosDetail['nota1']}</td>
                        </tr>
                        <tr>
                            <td>
                                <button>
                                    Dar examen
                                </button>
                            </td>
                        </tr>
                    </table>

render() {
    return (
    <div>
      <h1>Lista de Detalle de Cursos</h1>
      
      {this.state.cursosDetailNombres.map( (cursosDetailNombre) =>{
            return (
                <p>{cursosDetailNombre}</p>
            )  
        })}
      
      
      <table border="1">
        <thead>
          <tr>
            <th>Curso</th>
            <th>Curso</th>
            <th>Nota 1</th>
            <th>Nota 2</th>
            <th>Nota 3</th>
            <th>Promedio</th>
            <th>Categoria</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
        {console.log(this.state.cursosDetail)}
        {console.log(this.state.cursosDetailNombres)}
        {console.log(this.state.cursosDetailUnidoNombreCurso)}
        
          
          {this.state.cursosDetail.map( (cursosDetail,index1) =>{
                                         
            return (
              <tr key={cursosDetail['_links'].self.href}>
                <td>{cursosDetail['_links'].curso.href}</td>
                
                {this.state.cursosDetailNombres.map( (cursosDetailNombre,index2) =>{
                
                    
                    if(index1==index2){
                        return(
                        <td>{cursosDetailNombre}</td>
                        );
                    }
                    
                  
                })}
                
                
                <td>{cursosDetail['nota1']}</td> 
                <td>{cursosDetail['nota2']}</td> 
                <td>{cursosDetail['nota3']}</td>
                <td>{cursosDetail['promedio']}</td>  
                <td></td>
                <td></td>              
              </tr>
            
            );
           
          })}

        
        </tbody>
      </table>
      <hr />
      
    </div>
    )
  }
}

*/