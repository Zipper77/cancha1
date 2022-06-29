import React from 'react';
import './IniciarSesion.css';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/esm/Form'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';

function Main_IniciarSesion(){
  return (
    <><Container fluid="sm">
      <Row>
        <h1 className='titulo'>Editar Perfil</h1>
        <image src={require("https://dummyimage.com/800X480/000000/FFFFFF")} />
      </Row>
      <Row className='fillDatos'>
        <Form>
          <Form.Group className="dato mb-3" controlId="formBasicName">
            <Form.Label>Nombre Completo</Form.Label>
            <Form.Control type="name" placeholder="Juan Del Dos Perez" />
          </Form.Group>
          <Form.Group className="dato mb-3" controlId="formBasicTelefono">
            <Form.Label>Telefono</Form.Label>
            <Form.Control type="phone" placeholder="56 8 22222222" />
          </Form.Group>
          <Form.Group className="dato mb-3" controlId="formBasicCelu">
            <Form.Label>Celular</Form.Label>
            <Form.Control type="celu" placeholder="+56 9 22222222" />
          </Form.Group>
          <Form.Group className="dato mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="***********" />
          </Form.Group>
          <Form.Group className="box mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="CAPTCHA" />
          </Form.Group>
          <Form.Group className="box mb-3">
            <Button className='button' type="submit">
              Actualizar Datos
            </Button>
          </Form.Group>
          
        </Form>
      </Row>
    </Container></>      
  );
}
export default Main_IniciarSesion;