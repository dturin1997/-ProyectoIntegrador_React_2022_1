import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../layout/Layout'
import NavbarPerfil from '../Navbar/NavbarPerfil'

export default function PerfilPage(){
    const items=JSON.parse(localStorage.getItem('user-info'));
    return (
        <div className="text-center fondo">
            <Layout>
                <div className='fondo3'>
            <header className='header'>
                <div >
                    <img className="imgperfil" src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'/>
                </div>
           </header></div>
           <NavbarPerfil>
            <div className='fondo4'>
                <form class="row g-3">
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" value={items.email}/>
                    </div>
                    <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">Password</label>
                        <input type="password" class="form-control" id="inputPassword4" value={items.password}/>
                    </div>
                    <div class="col-12">
                        <label for="inputAddress" class="form-label">First Name</label>
                        <input type="text" class="form-control" id="inputFirstName" value={items.first_name}/>
                    </div>
                    <div class="col-12">
                        <label for="inputAddress2" class="form-label">Last Name</label>
                        <input type="text" class="form-control" id="inputLastName" value={items.last_name}/>
                    </div>
                    <div class="col-md-6">
                        <label for="inputCity" class="form-label">Birthday</label>
                        <input type="text" class="form-control" id="inputCity"  value={items.birthday}/>
                    </div>
                    <br></br><br></br>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Sign in</button>
                    </div>
                </form>
                </div>
           </NavbarPerfil>
            </Layout>
        </div>
    )
}