
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Person extends Component {
  
  static propTypes = {
    nit: PropTypes.string,
    name: PropTypes.string,
  };

  render() {
    
    const { name } = this.props;
    const { nit } = this.props;

    return (
      <div className="person">
        <h1>{name}</h1>
        <h1>{nit}</h1>
      </div>
    );

  }
}

export default Person;