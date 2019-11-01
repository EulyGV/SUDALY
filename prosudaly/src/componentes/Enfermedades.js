import React, { Component } from 'react';

class Enfermedades extends Component{

    busquedaRef =React.createRef();

     

    render() {
        return (
            <form >
               <div className="row">
                  <div className="form-group col-md-4">
                        <input style={{backgroundImage: './logo.png'}} ref={this.busquedaRef} type="submit" className="btn btn-lg btn-danger btn-block"/>
                    </div>
               </div>
            </form>       
         );
    }
}


export default Enfermedades;