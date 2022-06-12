import React, { Component } from 'react';
import axios from 'axios';



class App extends Component {

  componentWillMount(){
    let arrayNombres=[]
    axios.get('http://localhost:8080/users/1/cursoUser/')
    .then(res => {
      this.setState({ cursosDetail: res.data._embedded.cursoUsers })
      //let url = res.data._embedded.cursoUsers[0]._links.curso.href
      let array = res.data._embedded.cursoUsers
      
      console.log(array.length)
      
    
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
            arrayNombres.push(res.data)
            //arrayNombres.push(JSON.stringify(res.data.name))
          }).catch(err => {
            console.log(err);
         });  
      }
      
    }).then( () =>
      this.setState({ cursosDetailNombres: arrayNombres })
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

{this.state.cursosDetailNombres[0]}

{this.state.cursosDetailNombres.map( (cursosDetailNombre) =>{
        return(
          <h1>{cursosDetailNombre['name']}</h1>
        )
        
      })}

{this.state.cursosDetailNombres.map( (cursosDetailNombre) =>{
            return(
              <p>{cursosDetailNombre}</p>
            );
        })}

{this.state.cursosDetailNombres.map( (cursosDetailNombre) =>{
                  return (
                    <td>{cursosDetailNombre[1]}</td>
                  )
                  
                })}

{


  {console.log(this.state.cursosDetail)}

    let nombre = axios.get(cursosDetail['_links'].curso.href)
                .then(function(response) {
                console.log(response.data.name)
                return response.data.name
                })
                    axios.get(cursosDetail['_links'].curso.href)
                    .then(res => {
                      res.json()
                    }).then(function(data){
                        let nombre = data.name;
                        return nombre
                    })
                    }

{this.state.cursosDetail.map( (cursosDetail) =>{
            return (
              <tr>
                <td>{cursosDetail[0].nota1}</td>               
              </tr>
            );
          })}


async function getCursoName() {
                    //const url="'"+cursosDetail['_links'].curso.href+"'"
                    //let url2 = cursosDetail['_links'].curso.href
                    //console.log(url)
                    //console.log(url2)

                    /*
                    let result = await fetch(cursosDetail['_links'].curso.href)
                    const data = await result.json();
                     

                    console.log(data)
                    return data;
                    */


                    /*
                    Funciona mas o menos

                    let result = await axios.get(cursosDetail['_links'].curso.href)
                    .then(res => {
                        console.log(res)
                        console.log(res.data.name)
                        return res.data.name
                    })
                    console.log(result)
                    return result;

                    /*
                    //const data = await result.json();
                    //console.log(res.data.name)
                    
                    //console.log(result)
                    //console.log(result)
                    /*.then(res => {
                        console.log(res)
                        //return res.data.name
                    })
                    .catch(err => console.error(err))*/
                    
                    //let data = await result.json();
                    //console.log(data)
                    
                
                    /*                
                  }*/
                  /*
                  let result = axios.get(cursosDetail['_links'].curso.href)
                  .then(res => {
                    console.log(res)
                    console.log(res.data.name)
                    return res.data.name
                  })
                  */
                  /*
                  axios.get(cursosDetail['_links'].curso.href)
                  .then(res => {
                    this.setState({ cursosDetailNombres: res.data.name })
                  })
                  *//*
                  //console.log(result)
                  //console.log(getCursoName())
                  //let curso=getCursoName()

*/