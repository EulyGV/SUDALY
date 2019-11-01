import React, { Component } from 'react';
import {Row, Col, Card, CardBody,Table} from 'reactstrap';

class Typography extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="card">
          <div className="card-header" style={{fontWeight: "bold"}}>
           <h1> PROFESIONALES</h1> 
          </div>
          <div className="card-body">
            <table className="table">
              
            <Row>
          <Col>
            <Card>        
              <CardBody>               
                <br />
                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                  <tr>
                    <th className="text-center"><i className="icon-people"></i></th>
                    <th>Nombre</th>
                    <th className="text-center">País</th>
                    <th>Especialidad</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img src={'assets/img/avatars/1.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                      </div>
                    </td>
                    <td>
                      <div>Betty Cooper</div>                      
                    </td>
                    <td className="text-center">
                      <i className="flag-icon flag-icon-us h4 mb-0" title="us" id="us"></i>
                    </td>
                    <td>
                        <div className="float-left">
                        <strong>Pediatría </strong>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img src={'assets/img/avatars/2.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                        
                      </div>
                    </td>
                    <td>
                      <div>Veronica Lodge</div>                    
                    </td>
                    <td className="text-center">
                      <i className="flag-icon flag-icon-br h4 mb-0" title="br" id="br"></i>
                    </td>
                    <td>
                        <div className="float-left">
                        <strong>Reumatología </strong>
                      </div>
                    </td>
                    
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img src={'assets/img/avatars/3.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                        
                      </div>
                    </td>
                    <td>
                      <div>Cheryl Blossom</div>                    
                    </td>
                    <td className="text-center">
                      <i className="flag-icon flag-icon-us h4 mb-0" title="us" id="us"></i>
                    </td>
                    <td>
                        <div className="float-left">
                        <strong>Alergología</strong>
                      </div>
                    </td>
                    
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img src={'assets/img/avatars/4.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                        
                      </div>
                    </td>
                    <td>
                      <div>Archibaldo Gómez</div>
                      
                    </td>
                    <td className="text-center">
                      <i className="flag-icon flag-icon-fr h4 mb-0" title="fr" id="fr"></i>
                    </td>
                    <td>
                        <div className="float-left">
                        <strong>Oftalmología </strong>
                      </div>
                    </td>
                    
                  </tr>
                  
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        </table>
          </div>
        </div>
        </div>
        
        
    );
  }
}

export default Typography;
