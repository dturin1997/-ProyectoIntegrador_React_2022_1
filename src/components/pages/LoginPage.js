import React, {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'

import '../../App.css'
import '../../Login.css'

export default function SignInPage() {

    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");

    const history = useHistory();
/*
    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            //console.log(localStorage.getItem('user-info'))
            //history.push("/home")
        }
    },[])
*/
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
        history.push("/home")
    }

    return (
        <div class="body">
            <div className="text-center m-5-auto fondo">
            <h2 class="text-white">Sign in to us</h2>
            <div class="div-form">
                <div>
                    <p>
                        <label>Username</label><br/>
                        <input type="text" name="first_name" 
                        onChange={(e)=>setUsername(e.target.value)}
                        required />
                    </p>
                </div>
                <div>
                    <p>
                        <label>Password</label>
                        <br/>
                        <input  type="password" name="password" 
                        onChange={(e)=>setPassword(e.target.value)}
                        required /><br/>
                        <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    </p>
                </div>
                <div>
                    <p>
                        <button 
                        onClick={login}
                        id="sub_btn" type="submit">Login</button>
                    </p>
                </div>
            </div>
            <section>
                <p class="text-white">First time? <Link to="/register"><p class="text-white"><strong>Create an account</strong></p></Link></p>
                <p><Link to="/"><p class="text-white"><strong>Back to Homepage</strong></p></Link>.</p>
            </section>
        </div>
        </div>
    )
}
