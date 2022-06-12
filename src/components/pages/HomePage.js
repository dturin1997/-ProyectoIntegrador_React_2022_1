import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
    const items=JSON.parse(localStorage.getItem('user-info'));
    console.log(items.id);
    let url= "http://localhost:8080/users/"+items.id
    console.log(url)
    return (
        <div className="text-center">
            <h1 className="main-title home-page-title">welcome to our app</h1>
            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
            <Link to="/perfil">
                    <button className="primary-button" id="reg_btn"><span>Perfil</span></button>
            </Link>
            <span><p>{localStorage.getItem('user-info')}</p></span>
            <span><p>{items.username}</p></span>
            <span><p>{items.email}</p></span>
            <span><p>{items.id}</p></span>
        </div>
    )
}
