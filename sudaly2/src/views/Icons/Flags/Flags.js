import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { Button} from 'reactstrap';
import cardiologia from './cardiologia.png';

class Flags extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          
          <CardBody>
            <Row className="text-center">
              
              <Col className="mb-5" xs="3" sm="2">
                <i className="flag-icon flag-icon-ae h1" title="ae" id="ae"></i>
                <Button block color="primary">Fractura</Button>
              </Col>
              <Col className="mb-5" xs="3" sm="2">
                <i className="flag-icon flag-icon-af h1" title="af" id="af"></i>
                <Button block color="secondary">Ginecologia</Button>
              </Col>
              
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Flags;
