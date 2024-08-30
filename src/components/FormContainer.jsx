import React, { useState, useEffect } from 'react';
import { Container, Card, Row, Col, Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2'

  export const FormContainer = () => {
  useEffect(() => {
    fetch('http://localhost:4000/db')
      .then(async (response)=> {
        const resJSON = await response.json()
        console.log(resJSON)
      })
      .catch((err) => {
        console.log(err)
      });
  }, []);

  return (
    <Container className="mt-5">
      <Card>
        <Card.Header>
          <Card.Title>Reporte diario de servicio</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Complete los cuadros con la información correspondiente del servicio
          </Card.Subtitle>
        </Card.Header>
        <Card.Body>
          <Form>
            <Row>
              <Col md={4}>
                <h6>Primera Columna</h6>
                <Form.Group>
                  <Form.Label htmlFor="servicio">Usted realizó el servicio:</Form.Label>
                  <Form.Control as="select" id="servicio">
                    <option value="">Seleccione...</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="locomotoras">Con la locomotora:</Form.Label>
                  <Form.Control as="select" id="locomotoras">
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="siendo">Siendo usted:</Form.Label>
                  <Form.Control as="select" id="siendo">
                    <option value="">Seleccione...</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="nombre">De nombre:</Form.Label>
                  <Form.Control as="select" id="nombre">
                    <option value="">Seleccione...</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="guardas">Junto a:</Form.Label>
                  <Form.Control as="select" id="guardas">
                    <option value="">Seleccione...</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="pres">Con el guarda:</Form.Label>
                  <Form.Control as="select" id="pres">
                    <option value="">Seleccione...</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={4}>
                <h6>Segunda Columna</h6>
                <Form.Group>
                  <Form.Label htmlFor="art">N° de ART:</Form.Label>
                  <Form.Control
                    type="text"
                    id="art"
                    placeholder="Ingrese N° de ART"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="dia">Día:</Form.Label>
                  <Form.Control type="date" id="dia"/>
                </Form.Group>
              </Col>
              <Col md={4}>
                <h6>Tercera Columna</h6>
                <Form.Group>
                  <Form.Label htmlFor="observaciones">Observaciones especiales:</Form.Label>
                  <Form.Control
                  />
                </Form.Group>
                <Button type="submit" className="btn-block">
                  Enviar
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};