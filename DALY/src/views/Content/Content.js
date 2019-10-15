

import React, { Component } from 'react';

import './style.css';
import './bootstrap.min.css';

import Header from '../../components/Header/Header';
import Enfermedades from '../../components/Enfermedades/Enfermedades';
import Footer from '../../components/Footer/Footer';

class Content extends Component {

  render() {
    return (
      <div>

        <Header/>
        <Enfermedades/>
        <Footer/>

      </div>
    
    );
  }
}

export default Content;
