import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function SignUpPage() {

    const [username,setUsername]=useState("");
    const [firstname,setFirstname]=useState("");
    const [lastname,setLastname]=useState("");
    const [birthday,setBirthday]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    
    async function login(){
        console.warn(username,password)
        let item={username,password};
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

    return (
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form action="/home">
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" requiredc />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}
