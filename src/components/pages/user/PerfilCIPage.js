import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../layout/Layout'
import NavbarPerfil from '../Navbar/NavbarPerfil'

export default function PerfilCIPage(){
    const items=JSON.parse(localStorage.getItem('user-info'));
    return (
        <div className="text-center">
            <Layout>
            <header className='header'>
                <div>
                    <img className="imgperfil" src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'/>
                </div>
           </header>
           
           <NavbarPerfil>
                <div class="col-4" >
                    <div class="card">
                        <img src="https://i.ytimg.com/vi/Q3JBvLOzL0o/mqdefault.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Ver su Certificado</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Click Aquí</a>
                        </div>
                    </div>
                    <div class="row py-3">
                        
                    </div>
                </div>
                <div class="col-3">
                            <div class="card fondo-card">
                                <div class="card-body">
                                    <h6></h6>
                                    <p>¿Quiere ver los detalles de las notas? haga click aquí</p>
                                    <Link to="/detalle_notas">
                                    <button class="btn btn-info">Ver detalles</button>
                                    </Link>
                                </div>
                            </div>
                 </div>

           </NavbarPerfil>
            </Layout>
        </div>
    )
}