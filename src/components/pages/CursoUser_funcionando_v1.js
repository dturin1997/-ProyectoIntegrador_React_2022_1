import React, { Component } from 'react';
import axios from 'axios';



class App extends Component {

  componentWillMount(){
    let arrayNombres=[]
    let arrayNombres2=[]
    axios.get('http://localhost:8080/users/1/cursoUser/')
    .then(res => {
      this.setState({ cursosDetail: res.data._embedded.cursoUsers })
      //let url = res.data._embedded.cursoUsers[0]._links.curso.href
      let array = res.data._embedded.cursoUsers
      
      console.log(array.length)
      
      //this.setState({ cursosDetailNombres: [] })
      var arrayPrueba=[]
      //arrayPrueba.push(1)
      //arrayPrueba.push(2)
      
      //console.log(arrayPrueba)
    
      for(var i=0;i<array.length;i++){
        console.log(array[i])
        /*
        axios.get(array[i]['_links'].curso.href)
            .then(res => {
              arrayNombres.push(res.data.name)
              //arrayNombres.push(JSON.stringify(res.data.name))
            })
          */
          
          axios.get(array[i]['_links'].curso.href)
          .then(res => {
            arrayPrueba.push(JSON.parse(JSON.stringify(res.data.name)))
            console.log(arrayPrueba)

            arrayNombres.push(res.data)
            
            var nombre=res.data.name
            
            
            //this.state.cursosDetailNombres.push(nombre)
            //arrayNombres.push(JSON.stringify(res.data.name))
            //this.setState({ cursosDetailNombres: [res.data] })
            this.setState({ cursosDetailNombres: arrayPrueba })
          }).catch(err => {
            console.log(err);
         });  
      }
      //return arrayNombres2=Object.entries(arrayNombres)
      //return arrayNombres
      //var jsonArray = JSON.parse(JSON.stringify(arrayNombres))
      //var jsonArray = JSON.stringify(arrayNombres)
      //return jsonArray
    }).then( (res) =>{
        //console.log(res)
        //console.log(arrayNombres)
        //var jsonArray = JSON.parse(JSON.stringify(arrayNombres))
        //console.log(jsonArray)
        //this.setState({ cursosDetailNombres: res })
    }
        
    )
      //console.log(arrayNombres)
      //this.setState({ cursosDetailNombres: res.data.name })
      /*
      return axios.get(url)
            .then(res => {
              this.setState({ cursosDetailNombres: res.data.name })
            }) 
            */  
    //})

    //console.log(this.state.cursosDetail)
    //console.log(this.state.cursosDetailNombres)
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
      <h1>Lista de Series</h1>
      
      {this.state.cursosDetailNombres.map( (cursosDetailNombre) =>{
            //{console.log(cursosDetailNombre.arrayNombres['name'])}
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
        
          
          {this.state.cursosDetail.map( (cursosDetail) =>{
            
                
                
                
            
            return (
              <tr>
                <td>{cursosDetail['_links'].curso.href}</td>
                
                <td></td>
                  
                
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

/*

<p>{cursosDetailNombre.arrayNombres['name']}</p>

{this.state.cursosDetailNombres.map( (cursosDetailNombre) =>{
            
                
                
                
            
            
              
            
      })}

*/