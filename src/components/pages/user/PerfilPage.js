import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../layout/Layout'
import NavbarPerfil from '../Navbar/NavbarPerfil'

export default function PerfilPage(){
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
           </NavbarPerfil>
            </Layout>
        </div>
    )
}