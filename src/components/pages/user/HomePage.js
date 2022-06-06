import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../layout/Layout'

export default function HomePage() {
    const items=JSON.parse(localStorage.getItem('user-info'));
    return (
        <div className="text-center">
            <Layout>
            <header>
                
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
            </Layout>
        </div>
    )
}
