import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
    const items=JSON.parse(localStorage.getItem('user-info'));
    return (
        <div className="text-center">
            <header>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                        <Link to="/home">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        </Link>
                        <Link to="/perfil">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Perfil</a>
                        </li>
                        </Link>
                        <Link to="/">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Log out</a>
                        </li>
                        </Link>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            More actions ...
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Historial de cursos</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <h1 className="main-title home-page-title">welcome to Academy</h1>
            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
            <Link to="/perfil">
                    <button className="primary-button" id="reg_btn"><span>Perfil</span></button>
            </Link>
            <span><p>{localStorage.getItem('user-info')}</p></span>
            <span><p>{items.username}</p></span>
            <span><p>{items.email}</p></span>
        </div>
    )
}
