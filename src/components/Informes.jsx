import {
    Container,
    Card,
    Row,
    Col,
    Form,
    Button,
    CardBody,
    CardHeader,
  } from "react-bootstrap";
  import React, { useState } from "react";
  
  const Informes = () => {
      <Container className="mt-5">
        <Card>
          <CardHeader>
            <h1 className="mb-4">PDF Generator</h1>
          </CardHeader>
          <CardBody>
            <Form>
              <Form.Group>
                <Form.Label htmlFor="desarrolle">Desarrolle</Form.Label>
                <Form.Control
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="name">Name</Form.Label>
                <Form.Control
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="dia">Dia</Form.Label>
                <Form.Control
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="mes">Mes</Form.Label>
                <Form.Control
                />
              </Form.Group>
              <Button type="submit" variant="primary">
                Generate PDF
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Container>
  };
  export default Informes;