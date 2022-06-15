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
            <div>

                <span><p>First Name: {items.first_name}</p></span>
                <span><p>Last Name: {items.last_name}</p></span>
                <span><p>Birthday: {items.birthday}</p></span>
                <span><p>Username: {items.username}</p></span>
                <span><p>Email: {items.email}</p></span>
            </div>
                <div class="row g-3 align-items-center">
                    <div class="col-auto">
                        <label for="inputFirstname" class="col-form-label">First Name:</label>
                    </div>
                    <div class="col-auto">
                        <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline"/>
                        {items.first_name}
                    </div>
                </div> 
                <div class="row g-3 align-items-center">
                    <div class="col-auto">
                        <label for="inputFirstname" class="col-form-label">Last Name</label>
                    </div>
                    <div class="col-auto">
                        <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline"/>
                        {items.last_name}
                    </div>
                </div> 
                <div class="row g-3 align-items-center">
                    <div class="col-auto">
                        <label for="inputFirstname" class="col-form-label">Birthday</label>
                    </div>
                    <div class="col-auto">
                        <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline"/>
                        {items.birthday}
                    </div>
                </div> 
                <div class="row g-3 align-items-center">
                    <div class="col-auto">
                        <label for="inputFirstname" class="col-form-label">Username</label>
                    </div>
                    <div class="col-auto">
                        <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline"/>
                        {items.username}
                    </div>
                </div>   
                <div class="row g-3 align-items-center">
                    <div class="col-auto">
                        <label for="inputFirstname" class="col-form-label">Email</label>
                    </div>
                    <div class="col-auto">
                        <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline"/>
                        {items.email}
                    </div>
                </div> 
           </NavbarPerfil>
            </Layout>
        </div>
    )
}