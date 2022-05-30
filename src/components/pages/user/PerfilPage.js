import React from 'react'
import { Link } from 'react-router-dom'

export default function PerfilPage(){
    const items=JSON.parse(localStorage.getItem('user-info'));
    return (
        <div className="text-center">
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
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown link
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        </ul>
                    </div>
            </nav>
           <header className='header'>
                <div>
                    <img className="imgperfil" src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'/>
                </div>
           </header>
           
           <main>
                <hr></hr>
               <div class="row">
                    <div class="col col-lg-3">
                    <Link to="/perfil">
                        Datos de tu perfil
                    </Link>
                    <hr></hr>
                    <Link to="/cursos">
                        Cursos Inscritos
                    </Link>
                    <hr></hr>
                    <Link to="/certificados">
                        Certificados
                    </Link>
                    <hr></hr>
                    <Link to="/">
                        Log out
                    </Link>
                    <hr></hr>
                    </div>
                   <div class="col-4">
                        
                    </div>
                   <div class="col-4">
                        
                   </div>
               </div>
           </main>
        </div>
    )
}