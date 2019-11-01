import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import usersData from './UsersData'

function UserRow(props) {
  const user = props.user
  const userLink = `/users/${user.id}`

  

  return (
    <tr key={user.id.toString()}>
      <th scope="row"><Link to={userLink}>{user.id}</Link></th>
      <td><Link to={userLink}>{user.name}</Link></td>
      <td>{user.registered}</td>
      <td>{user.role}</td>
    </tr>
  )
}

class Users extends Component {

  render() {

    const userList = usersData.filter((user) => user.id < 10)

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={6}>
            <Card>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">IDENTIFICACIÓN</th>
                      <th scope="col">NOMBRE</th>
                      <th scope="col">FECHA INGRESO</th>
                      <th scope="col">ESTADO</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userList.map((user, index) =>
                      <UserRow key={index} user={user}/>
                    )}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Users;
