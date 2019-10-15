
import React, { Component } from 'react'
import { getList, addToList, deleteItem, updateItem } from "./ListEnfermedades";

class Enfermedades extends Component {

  constructor () {
    super()

    this.state = {
        enfermedades:[]    
    }

  }

  componentDidMount() {
    this.getAll();
  }


  getAll = () => {
    getList().then(data => {
      this.setState(
        {
          enfermedades: [...data]
        },
        () => {
          console.log(this.state.enfermedades);
        }
      );
    });
  };
  

  render () {

    const { listaE } = this.state

    return (
        <div className="our-skills-area text-center section-padding-100-0">
            <div className="container">
                <div className="row">
                  {this.state.enfermedades.map((enfermedade, index) => (
                        <div className="col-12 col-sm-6 col-md-3 col-lg-2">
                            <div className="single-pie-bar" data-percent="90" key={index}>
                                <h5>{enfermedade[0]}</h5>
                                <p>Dolor sit amet</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div> 
        </div>
    )
  }
}

export default Enfermedades
