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
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label htmlFor="desarrolle">Desarrolle</Form.Label>
                <Form.Control
                  as="textarea"
                  id="desarrolle"
                  rows={5}
                  value={formData.desarrolle}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="name">Name</Form.Label>
                <Form.Control
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="dia">Dia</Form.Label>
                <Form.Control
                  type="text"
                  id="dia"
                  value={formData.dia}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="mes">Mes</Form.Label>
                <Form.Control
                  type="text"
                  id="mes"
                  value={formData.mes}
                  onChange={handleChange}
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