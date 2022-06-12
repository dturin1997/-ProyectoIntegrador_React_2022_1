import React, { Component } from 'react';
import axios from 'axios';



class App extends Component {

  componentWillMount(){
    
    let arrayNombres=[]
    
    axios.get('http://localhost:8080/users/1/cursoUser/')
    .then(res => {
      this.setState({ cursosDetail: res.data._embedded.cursoUsers })
      
      let array = res.data._embedded.cursoUsers
      
      console.log(array.length)
            
      
          
      for(var i=0;i<array.length;i++){
        console.log(array[i])         
          axios.get(array[i]['_links'].curso.href)
          .then(res => {
            arrayNombres.push(JSON.parse(JSON.stringify(res.data.name)))
            
            
            this.setState({ cursosDetailNombres: arrayNombres })
          }).catch(err => {
            console.log(err);
         });  
      }
      
    })    
  }

  

  constructor(props) {
    super(props);
    this.state=({
        cursosDetail: [],
        cursosDetailNombres: []
      
    })
  }
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
        
          
          {this.state.cursosDetail.map( (cursosDetail,index1) =>{
                                         
            return (
              <tr>
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
export default App;