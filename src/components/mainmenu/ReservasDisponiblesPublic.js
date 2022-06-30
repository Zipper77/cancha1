import React from 'react';
import './ReservasDisponiblesPublic.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Main_CrearCuenta from './CrearCuenta';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import Main_IniciarSesion from './IniciarSesion';
import Main_ListaCanchas from './ListaCanchas';
import Client_Reservate from '../clientmenu/client_reservate'

function Main_ReservasDisponiblesPublic(){
    return (
      <Tab.Container id="list-group-tabs" fluid="md">
            <Row>
              <><Col sm={3}>
                <Card className='card a'>
                  <Card.Img variant="top" src="https://dummyimage.com/800X480/000000/FFFFFF" />
                  <Card.Body className='body'>
                    <Card.Title className="name">Bienvenido, <strong>Don Ramon</strong></Card.Title>
                      <ListGroup>
                        <ListGroup.Item className='listItem' action href="#link1">
                          Editar Perfil
                        </ListGroup.Item>
                        <ListGroup.Item className='listItem' action href="#link2">
                          Mis Agendamientos
                        </ListGroup.Item>
                        <ListGroup.Item className='listItem' action href="#link3">
                          Mis Reservas
                        </ListGroup.Item>
                        <ListGroup.Item className='listItem' action href="#link4">
                          Buscar Reservas
                        </ListGroup.Item>
                      </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
              <Col className='display'>
                <Tab.Content>
                  <Tab.Pane eventKey="#link1">
                    <Main_IniciarSesion/>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link2">
                    <Main_CrearCuenta />
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link3">
                    <Main_ListaCanchas />
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link4">
                    <Client_Reservate />
                  </Tab.Pane>
                </Tab.Content>
              </Col></>
            </Row>
      </Tab.Container>
    );
}
export default Main_ReservasDisponiblesPublic;