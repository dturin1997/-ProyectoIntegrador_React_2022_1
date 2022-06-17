import React, {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'

import '../../App.css'

export default function SignUpPage() {

    /*const [username,setUsername]=useState("");
    const [firstname,setFirstname]=useState("");
    const [lastname,setLastname]=useState("");
    const [birthday,setBirthday]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");*/
    const history = useHistory();
    const initialValues = {username:"",email:"",password:"",first_name:"",last_name:"",birthday:""}
    const [formValues, setFormValues]=useState(initialValues);
    const [formErrors, setFormErrors]=useState({});
    const [isSubmit, setIsSubmit]=useState(false);
   // const [formValues, setFormValues]=useState(username,firstname,lastname,birthday,email,password)
    


    async function login(){
        let item={formValues};
        let result = await fetch("http://localhost:8080/api/auth/signin",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json" 
            },
            body:JSON.stringify(item)
        });
        const data = await result.json();
        //localStorage.setItem("user-info",JSON.stringify(data))
        localStorage.setItem("user-info",JSON.stringify(data))
        //const items=JSON.parse(localStorage.getItem('user-info'));
        console.log(data.id)
        console.log(data.username)
        console.log(data.email)
        //console.log(items.)
        history.push("/login")
    }



    const handleChange = (e) => {
        console.log(e.target);
        const {name, value} = e.target;
        setFormValues({...formValues,[name]:value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(login());
    }


useEffect(() =>{
console.log(formErrors);
if(Object.keys(formErrors).length == 0 && isSubmit){
    console.log(formValues);
}
}, {formErrors});

    const validate = (values) => {
        const errors = {}
        const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = "Username is required!";
          }
          if (!values.email) {
            errors.email = "Email is required!";
          } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
          }
          if (!values.password) {
            errors.password = "Password is required";
          } else if (values.password.length < 8) {
            errors.password = "Password must be more than 4 characters";
          } else if (values.password.length > 20) {
            errors.password = "Password cannot exceed more than 10 characters";
          }
          if(!values.first_name){
            errors.first_name = "First Name is required!";
          }
          if(!values.last_name){
            errors.last_name = "Last Name is required!";
          }
          if(!values.birthday){
            errors.birthday = "Birthday is required!";
          }
          return errors;
    }

    return (
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form onSubmit={handleSubmit}>
                 <p>
                    <p>{formErrors.username}</p>
                    <div>
                        <label>Username</label><br/>
                        <input type="text" name="username" 
                        value={formValues.username}
                        onChange={handleChange}
                        />
                    </div>
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" 
                     value={formValues.email}
                     onChange={handleChange} />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" 
                     value={formValues.password}
                     onChange={handleChange} />
                </p>
                <p>
                        <label>First Name</label><br/>
                        <input type="text" name="first_name" 
                        value={formValues.first_name}
                        onChange={handleChange} />
                </p>

                <p>
                        <label>Last Name</label><br/>
                        <input type="text" name="last_name" 
                        onChange={handleChange}
                        value={formValues.last_name} />
                </p>
                <p>
                        <label>Birthday</label><br/>
                        <input type="text" name="birthday" 
                        onChange={handleChange}
                        placeholder='2022-01-01'
                        value={formValues.birthday}/>
                 </p>
                <p>
                    <button id="sub_btn">Register</button>
                </p>
            </form>
            
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}

