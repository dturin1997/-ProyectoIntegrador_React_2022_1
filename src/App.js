import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './components/pages/LandingPage'
import DetallePage from './components/pages/user/DetallePage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/user/HomePage'
import PerfilPage from './components/pages/user/PerfilPage'
import PerfilCIPage from './components/pages/user/PerfilCIPage'
import PerfilCEPage from './components/pages/user/PerfilCEPage'
import CursoUser from './components/pages/CursoUser'

import './App.css'

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ LandingPage } />
                    <Route path="/login" component={ LoginPage } />
                    <Route path="/register" component={ RegisterPage } />
                    <Route path="/forget-password" component={ ForgetPasswordPage } />
                    <Route path="/home" component={ HomePage } />
                    <Route path="/perfil" component={ PerfilPage } />
                    <Route path="/cursos" component={ PerfilCIPage } />
                    <Route path="/certificados" component={ PerfilCEPage }/>
                    <Route path="/detalle_notas" component={ DetallePage } />
                    <Route path="/cursoUser" component={ CursoUser } />
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

const Footer = () => {
    return (
        <p className="text-center" style={ FooterStyle }>Copyright 2022 <a href="https://izemspot.netlify.com" target="_blank" rel="noopener noreferrer"></a></p>
    )
}

const FooterStyle = {
    background: "#222",
    fontSize: ".8rem",
    color: "#fff",
    bottom: 0,
    padding: "1rem",
    margin: 0,
    width: "100%",
    opacity: ".5"
}