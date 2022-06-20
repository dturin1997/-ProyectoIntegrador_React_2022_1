import React, {useState, useEffect} from 'react'
import { Route, Router, useHistory, Link } from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import Layout from '../layout/Layout'
import NavbarPerfil from '../Navbar/NavbarPerfil'

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

export default function PerfilPage(){
    const items=JSON.parse(localStorage.getItem('user-info'));
    const [user,setUser]=useState([]);
    useEffect(()=>{
        let url="http://localhost:8080/users/"+items.id
        fetch(url)
          .then((res)=>res.json())
          .then((json)=>{
            console.log(json);
            setUser((json));
          });
      },[]);

      const [success, setSuccess]=useState(null);
    const [error, setError]=useState(null);
    
    const onSubmit = async (values) => {
       const response = await axios
       .patch("http://localhost:8080/users/"+items.id)
       .catch((err) =>
       {if(err && err.response)
        console.log("Error: ",err.response.data);
        setError(err.response.data.message);
        setSuccess(null);
        
      });
      if (response) {
        setError(null);
        setSuccess(response.data.message);
        formik.resetForm();

      }
     
    };
    const formik = useFormik({
      initialValues : {
        username:"",
        email:"",
        password:"",
        first_name:"",
        last_name:"",
        birthday:""},
      validateOnBlur: true,
      onSubmit,
      validationSchema: validationSchema,
    })

      return (
        <div className="text-center fondo">
            <Layout>
                <div className='fondo3'>
            <header className='header'>
                <div >
                    <img className="imgperfil" src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'/>
                </div>
           </header></div>
           <NavbarPerfil>
            <div className='fondo4'>
  
                <form class="row g-3">
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" value={items.email}/>
                    </div>
                    <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">Contraseña</label>
                        <input type="password" class="form-control" id="inputPassword4" value={items.password} disabled/>
                    </div>
                    <div class="col-12">
                        <label for="inputAddress" class="form-label">Primer Nombre</label>
                        <input type="text" class="form-control" id="inputFirstName" value={items.first_name}/>
                    </div>
                    <div class="col-12">
                        <label for="inputAddress2" class="form-label">Apellido</label>
                        <input type="text" class="form-control" id="inputLastName" value={items.last_name}/>
                    </div>
                    <div class="col-md-6">
                        <label for="inputCity" class="form-label">Fecha de Nacimiento</label>
                        <input type="text" class="form-control" id="inputCity"  value={items.birthday}/>
                    </div>
                    <br></br><br></br>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Editar Perfil</button>
                    </div>
                </form>
                </div> 
           </NavbarPerfil>
            </Layout>
        </div>
    )
}