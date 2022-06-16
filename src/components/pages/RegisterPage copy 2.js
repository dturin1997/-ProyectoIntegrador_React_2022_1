import React, {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'

import '../../App.css'

export default function SignUpPage() {

    const [username,setUsername]=useState("");
    const [first_name,setFirstname]=useState("");
    const [last_name,setLastname]=useState("");
    const [birthday,setBirthday]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const history = useHistory();
    async function singup(){
        console.warn(username,password)
        let item={username,email,password,first_name,last_name,birthday};
        let result = await fetch("http://localhost:8080/api/auth/signup",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json" 
            },
            body:JSON.stringify(item)
        });
        const data = await result.json();
        //localStorage.setItem("user-info",JSON.stringify(data))
        localStorage.setItem("user-register",JSON.stringify(data))
        //const items=JSON.parse(localStorage.getItem('user-info'));
        console.log(data.id)
        console.log(data.username)
        console.log(data.email)
        //console.log(items.)
        history.push("/login")
    }

    const [error, setError] = useState({
        username: '',
        email:'',
        password: '',
        confirmPassword: '',
        first_name:'',
        last_name:'',
        birthday:''
      })
      const validateInput = e => {
 
    }
    return (
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <div class="div-form">
                <div>
                    <p>
                        <label>Username</label><br/>
                        <input type="text" name="username" 
                        onChange={(e)=>setUsername(e.target.value)}
                        required />
                    </p>
                </div>
                <div>
                    <p>
                        <label>Email address</label><br/>
                        <input type="text" name="email" 
                        onChange={(e)=>setEmail(e.target.value)}
                        required />
                    </p>
                </div>
                <div>
                    <p>
                        <label>Password</label><br/>
                        <input type="password" name="password" 
                        onChange={(e)=>setPassword(e.target.value)}
                        onBlur={validateInput}
                       required/>
                       {error.password && <span className='err'>{error.password}</span>}
                    </p>
                </div>
                <div>
                    <p>
                        <label>Confirm Password</label><br/>
                        <input type="password" name="confirmPassword" 
                        onChange={(e)=>setPassword(e.target.value)}
                        onBlur={validateInput}
                       required/>
                       {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>}
                    </p>
                </div>
                <div>
                    <p>
                        <label>First Name</label><br/>
                        <input type="text" name="first_name" 
                        onChange={(e)=>setFirstname(e.target.value)}
                        required />
                    </p>
                </div>
                <div>
                    <p>
                        <label>Last Name</label><br/>
                        <input type="text" name="last_name" 
                        onChange={(e)=>setLastname(e.target.value)}
                        required />
                    </p>
                </div>
                <div>
                    <p>
                        <label>Birthday</label><br/>
                        <input type="text" name="birthday" 
                        onChange={(e)=>setBirthday(e.target.value)}
                        required placeholder='2022-01-01'/>
                    </p>
                </div>
                <div>
                    <p>
                        <button 
                        onClick={singup}
                        id="sub_btn" type="submit">Sign Up</button>
                    </p>
                </div>
            </div>
            
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}
