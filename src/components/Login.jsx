import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col, Form, Button } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Google } from 'react-bootstrap-icons';

function Login() {
  return (
    <Container className="mt-5">
      <Card className="w-25 position-absolute top-50 start-50 translate-middle">
        <Card.Header>
          <h1>Hola</h1>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Correo electronico</Form.Label>
              <Form.Control type="email" placeholder="Escriba correo electronico" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Escriba contraseña" />
            </Form.Group>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <Button  variant="success" className="m-1 w-50 ">Iniciar sesion</Button>
              <div className="bg-body-secondary d-flex flex-column align-items-center justify-content-center border border-dark-subtle p-4 m-2 rounded">
                <Button className="w-100">Registrarse</Button>
                <Button variant="light" className="mt-4 border border-dark-subtle"><Google className=""/> Registrarse con Google</Button>
              </div>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Login;
