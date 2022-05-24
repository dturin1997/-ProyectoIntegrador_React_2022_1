import React from 'react'
import { Link } from 'react-router-dom'

export default function PerfilCPage(){
    const items=JSON.parse(localStorage.getItem('user-info'));
    return (
        <div className="text-center">
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
                    <Link to="/perfil">
                        Cursos Completados
                    </Link>
                    <hr></hr>
                    <Link to="/perfil">
                        Certificados
                    </Link>
                    <hr></hr>
                    <Link to="/">
                        Log out
                    </Link>
                    <hr></hr>
                    </div>
                   <div class="col-4">
                        <div class="card">
                            <img src="https://i.ytimg.com/vi/Nvm7JzhUpc4/mqdefault.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                   <div class="col-4">
                        <div class="card">
                            <img src="https://i.ytimg.com/vi/DAkQ_2xmmg8/maxresdefault.jpg?v=5ec31318" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                   </div>
               </div>
           </main>
        </div>
    )
}