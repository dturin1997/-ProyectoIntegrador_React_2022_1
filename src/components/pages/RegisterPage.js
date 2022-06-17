import React, {useState, useEffect} from 'react'
import { Route, Router, useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

import '../../App.css'


const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const validationSchema = yup.object({
  username: yup.string().min(3,"Please enter you username").required("Enter you username!"),
  email: yup.string().email("Please enter you email address").required(),
  password:yup.string().matches(PASSWORD_REGEX,"Please enter a validate password").required(),
  confirmPassword: yup
  .string()
  .required("Please confirm your password")
  .when("password",{
    is: val => (val && val.length > 0 ? true : false),
    then: yup.string().oneOf([yup.ref("password")],"Password does not match")
  }),
  first_name:yup.string().min(3,"Please enter you first name").required("Enter you first name!"),
  last_name:yup.string().min(3,"Please enter you last name").required("Enter you last name!"),
  birthday:yup.string().min(10,"Please enter you birthday").required("Enter you birthday!")
})

export default function SignUpPage() {

    /*const [username,setUsername]=useState("");
    const [firstname,setFirstname]=useState("");
    const [lastname,setLastname]=useState("");
    const [birthday,setBirthday]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");*/
    const history = useHistory();
   /* const initialValues = {
      username:"",
      email:"",
      password:"",
      confirmPassword:"",
      first_name:"",
      last_name:"",
      birthday:""}
    const [formValues, setFormValues]=useState(initialValues);
    const [formErrors, setFormErrors]=useState({});
    const [isSubmit, setIsSubmit]=useState(false);*/
    const [success, setSuccess]=useState(null);
    const [error, setError]=useState(null);
    const onSubmit = async (values) => {
      const {confirmPassword, ...data} = values;
       const response = axios.post("http://localhost:8080/api/auth/signup", data).catch((err) =>
       {if(err && err.response)
        console.log("Error: ",err.response.data);
        setError(err.response.data.message);
        setSuccess(null);
        alert("Error al registrarse")
      });
      if (response && response.data) {
        setError(null);
        setSuccess(response.data.message);
        formik.resetForm();
        singup();
        alert("Tu te has registrado exitosamente!")
      }
      //formik.resetForm;
    };
    const formik = useFormik({
      initialValues : {
        username:"",
        email:"",
        password:"",
        confirmPassword:"",
        first_name:"",
        last_name:"",
        birthday:""},
      validateOnBlur: true,
      onSubmit,
      validationSchema: validationSchema,
    })
   // const [formValues, setFormValues]=useState(username,firstname,lastname,birthday,email,password)
    
   async function singup(){
    history.push("/login");
   }


    return (
        <div className="text-center m-5-auto fondo">
            <h2 class="text-white">Join us</h2>
            <h5 class="text-white">Create your personal account</h5>
            {!error && <p className='formSuccess'>{success ? success : ""}</p>}
            {!success && <p className='formError'>{error ? error : ""}</p>}
            <form onSubmit={formik.handleSubmit}>
                 <p>
                    <p className='fieldValidate'>{formik.touched.username && formik.errors.username ? formik.errors.username:""}</p>
                    <div>
                        <label>Username</label><br/>
                        <input type="text" name="username" 
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                    </div>
                </p>
                <p>
                   <p className='fieldValidate'>{formik.touched.email && formik.errors.email ? formik.errors.email:""}</p>
                  <div>
                    <label>Email address</label><br/>
                    <input type="email" name="email" 
                     value={formik.values.email}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur} />
                  </div>
                </p>
                <p>
                    <div><p className='fieldValidate'>{formik.touched.password && formik.errors.password ? formik.errors.password:""}</p>
                    <label>Password</label><br/>
                    <input type="password" name="password" 
                     value={formik.values.password}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur} />
                     </div>
                </p>
                <p>
                    <div><p className='fieldValidate'>{formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword:""}</p>
                    <label>Confirm Password</label><br/>
                    <input type="password" name="confirmPassword" 
                     value={formik.values.confirmPassword}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur} />
                    </div>
                </p>
                <p><div><p className='fieldValidate'>{formik.touched.first_name && formik.errors.first_name ? formik.errors.first_name:""}</p>
                        <label>First Name</label><br/>
                        <input type="text" name="first_name" 
                        value={formik.values.first_name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                  </div>
                </p>

                <p><div><p className='fieldValidate'>{formik.touched.last_name && formik.errors.last_name ? formik.errors.last_name:""}</p>
                        <label>Last Name</label><br/>
                        <input type="text" name="last_name" 
                        onChange={formik.handleChange}
                        value={formik.values.last_name}
                        onBlur={formik.handleBlur} />
                  </div>
                </p>
                <p><div><p className='fieldValidate'>{formik.touched.birthday && formik.errors.birthday ? formik.errors.birthday:""}</p>
                        <label>Birthday</label><br/>
                        <input type="text" name="birthday" 
                        placeholder='2022-01-01'
                        value={formik.values.birthday}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}/>
                  </div>
                 </p>
                <p>
                    <button id="sub_btn" type='submit' disabled={!formik.isValid}>Register</button>
                </p>
            </form>
            
            <section>
                <p ><Link to="/"><p class="text-white">Back to Homepage</p></Link>.</p>
            </section>
        </div>
    )

}

