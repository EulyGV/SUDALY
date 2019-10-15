

import React, { Component } from 'react';
import './style.css';
import logo from '../Imagenes/logo.png';

class Header extends Component {

  render() {
    return (
      
    <header class="header-area">

      <div class="top-header-area">
          <div class="container h-100">
              <div class="row h-100">
                  <div class="col-12 h-100">
                      <div class="h-100 d-md-flex justify-content-between align-items-center">
                          </div>
                  </div>
              </div>
          </div>
      </div>
  
      <div class="main-header-area" id="stickyHeader">
          <div class="container h-100">
                <div class="row h-100 align-items-center">
                    <div class="col-12 h-100">
                        <div class="main-menu h-100">
                            <nav class="navbar h-100 navbar-expand-lg">
                                <a class="navbar-brand" href="index-2.html"> <img src={logo} alt="Logo"></img>
                                </a>

                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#medilifeMenu" aria-controls="medilifeMenu" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                                <div class="collapse navbar-collapse" id="medilifeMenu">
    
                                    <ul class="navbar-nav ml-auto">
                                        <li class="nav-item active">
                                            <a class="nav-link">Casa <span class="sr-only">(current)</span></a>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <a class="dropdown-item" >Casa</a>
                                                <a class="dropdown-item" >Sobre nosotros</a>
                                                <a class="dropdown-item" >Servicios</a>
                                            </div>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" >Sobre nosotros</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" >Servicios</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" >Contactos</a>
                                        </li>
                                    </ul>
    
                                    <a href="#" class="btn medilife-appoint-btn ml-30"> <span></span> </a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
      </div>

      </header>

    );
  }
}

export default Header;
