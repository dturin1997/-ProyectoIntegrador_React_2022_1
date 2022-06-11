import React, {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import Layout from '../layout/Layout'

export default function HomePage() {
    const items=JSON.parse(localStorage.getItem('user-info'));
    //const items2=JSON.parse(localStorage.getItem('cursosi-info'));
    //const items3=JSON.parse(localStorage.getItem('curso-info'));
    const [id,setId]=useState("");

    const [description,setDescription]=useState("");
    const [name,setName]=useState("");
    const [precio,setPrecio]=useState(0);
    const [cursos,setCursos]=useState([]);

//Funciona
    useEffect(()=>{
      let url="http://127.0.0.1:8080/cursoes"
      fetch(url)
        .then((res)=>res.json())
        .then((json)=>{
          //console.log(json);
          setCursos((json._embedded.cursoes));
        });
    },[]);
/*
          json._embedded.cursoes.forEach(el=> {
            fetch(el.url)
              .then((res)=>res.json())
              .then((json)=>{
                let curso ={ 
                  name:json.name,
                  description:json.description,
                  precio:json.precio
                 };
                 setCursos((cursos) => [...cursos,curso]);
              });
          });*/

//let curso: 
//json await = variable de tipo let
  //useEffect(() => {
      //hacer funciones asincronas con useffect
      /*El operador await se usa para esperar una promesa . 
      Solo se puede usar dentro de una función asíncrona dentro 
      del código JavaScript normal; */
  /* const getCursos = async (url) => {
        let res = await fetch(url),
          json = await res.json();
          console.log(json);
  
        json._embedded.cursoes.forEach(async (el) => {
          let res = await fetch(el.url),
            json = await res.json();
  
          console.log(json);
          let curso ={ 
            name:json.name,
            description:json.description,
            precio:json.precio
           };
  
          setCursos((cursos) => [...cursos, curso]);
        });
      };
  
      getCursos("http://localhost:8080/cursoes");
    }, []);*/
/*
    useEffect(() => {

    const getCursos = async (url) => {
      let res = await fetch(url),
        json = await res.json();
        console.log(json);

      json._embedded.cursoes.forEach(async (el) => {
        let res = await fetch(el.url),
          json = await res.json();

        console.log(json);
        let curso ={ 
          name:json.name,
          description:json.description,
          precio:json.precio
         };

        setCursos((cursos) => [...cursos, curso]);
      });


    };

    getCursos("http://localhost:8080/cursoes");
  }, []);*/

        /*let curso ={ 
        name:json._embedded.cursoes.name,
        description:json._embedded.cursoes.description,
        precio:json._embedded.cursoes.precio
       };
       setCursos((cursos) => [...cursos, curso]);*/
    const historyC = useHistory();


/*
    const initialState = {
      cursosData: [],
      result: '',
    };

    for (let i = 0; i < cursos.cursosData.length; i += 1) {
      const currentDevice = device.deviceData[i];
      const entry = [ 
        currentDevice['description'],
        currentDevice['name'],
        currentDevice['precio'],
      ];
      tableData.push(entry);
    }*/
        return (
                <div className="text-center">
                <Layout>
                <header>
                    
                </header>
                <h1 className="main-title home-page-title">Welcome to Virtual Academy</h1>
                <Link to="/">
                    <button className="primary-button">Log out</button>
                </Link>
                <Link to="/perfil">
                        <button className="primary-button" id="reg_btn"><span>Perfil</span></button>
                </Link>
                <span><p>{localStorage.getItem('user-info')}</p></span>
                <span><p>{items.username}</p></span>
                <span><p>{items.email}</p></span>
                <div>
                    <h3>Lista de Cursos</h3>
                    {cursos.length === 0?(
                      <h4>Cargando ...</h4>
                    ):(
                      <section>
                   <div class="container">
                    
                      <div class="row" >
                      {cursos.map( curso=>( 
                          <div class="col-4" key={curso.id}>
                          <div class="card mx_auto">
                                  <img src="https://i.ytimg.com/vi/Nvm7JzhUpc4/mqdefault.jpg" class="card-img-top" alt="..."/>
                                  <div class="card-body" >
                                      <h5 class="card-title">{curso.name}</h5>
                                      <p class="card-text">S/.{curso.precio}</p><br></br>
                                      <p class="card-text">{curso.description}</p>
                                      <button 
                                      onClick={cursoi}
                                       id="sub_btn" class="btn btn-primary" 
                                       type="submit">Empezar  Curso</button>
                                  </div>
                              </div>
                          </div>
                      ))}
                      </div>
                    </div> 
                    </section>
                    )}
                    <p>
                        <button 
                        onClick={curso_i}
                        id="sub_btn" type="submit">Curso</button>
                    </p>
                    <p>
                     {curso_i.data}
                    </p>
                </div>
                </Layout>
            </div>)
          

     /* useEffect(()=>{
            fetch("http://127.0.0.1:8080/cursoes")
            .then((response) => response.json())  
            .then((cur) => {
              this.setState({ productos: cur,
              })
            }) 
            .catch(
              (b)=>{
                console.log(Error)
              }
            )
          },[])
*/
     /* componentWillMount(); {
          fetch('http://127.0.0.1:8080/cursoes')
            .then((response) => {
              return response.json()
            })
            .then((cur) => {
              this.setState({ 
                cursos: cur,
                recuperado: true
               }) 
            })    
        } */

      async function curso(){
            let result = await fetch("http://localhost:8080/cursoes",{
                method:'GET',
                headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json" 
                },
            });
            const data = await result.json();
            setCursos(data._embedded.cursoes);
            //localStorage.setItem("user-info",JSON.stringify(data))
            localStorage.setItem("curso-info",JSON.stringify(data))
        }

       async function cursoi(){
          
          let url1="http://localhost:8080/cursoes/"+{id}
          let url2="http://localhost:8080/users/"+{id}
          let item={url1,url2};
            let result = await fetch("http://localhost:8080/cursoUser",{
                method:'POST',
                headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json" 
                },
                body:JSON.stringify(item)
            });
            const data = await result.json();
            //localStorage.setItem("user-info",JSON.stringify(data))
            localStorage.setItem("cursoi-info",JSON.stringify(data))
            historyC.push("/cursos")
        }

        async function curso_i(){
          let result = await fetch("http://127.0.0.1:8080/users/1/cursoUser")

         // .then(data => console.log(data));
          const data = await result.json();
          console.log(data)
          console.log(data._embedded.cursoUsers)
          console.log(data._embedded.cursoUsers[0].nota3)
          console.log(data._embedded.cursoUsers[0]._links.curso.href)
          let uri = data._embedded.cursoUsers[0]._links.curso.href;
          let result1 = await fetch(uri)
          const data1 = await result1.json();
          console.log(data1.name)
          //localStorage.setItem("user-info",JSON.stringify(data))
         //localStorage.setItem("cursosi-info",JSON.stringify(data))
          /*
          historyC.push("/home")*/
      }

}