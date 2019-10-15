
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Img extends Component {
  
  

  static propTypes = {
    url: PropTypes.string,
  };

  render() {

    let styles = {
      width: '400px', 
      height: '400px',
    };

    const { url } = this.props;

    return (
      <div className="imag">
         <img src={url} alt="logo" style={styles} />
      </div>
    );

  }
}

export default Img;