import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col, Form, Button } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Swal from 'sweetalert2'

const LOCAL_BASE_BACKEND_URL = VITE_PUBLIC_BASE_BACKEND_URL || "http://localhost:4000";
console.log(LOCAL_BASE_BACKEND_URL, import.meta.env.VITE_VERCEL_ENV)
const Inicio = () => {
  const [reportes, setReportes] = useState([]);

  useEffect(() => {
    fetch(`${LOCAL_BASE_BACKEND_URL}/reportes`)
    .then(async (response) => {
      const resJSON = await response.json();
      setReportes(resJSON["data"]);
    })
    .catch((err) => {
      console.log(err);
    });
}, []);

console.log(reportes)

const handleDeleteReporte = (_id) => {
  fetch(`${process.env.VITE_PUBLIC_BASE_BACKEND_URL}/reportes/${_id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      // Actualizar la lista de reportes después de eliminar uno
      return fetch("http://localhost:4000/reportes")
    })
    .then(async (response) => {
      const resJSON = await response.json();
      setReportes(resJSON["data"]);
      Swal.fire({
        position: "top-end",
        icon: "info",
        title: "Se borró correctamente",
        showConfirmButton: false,
        timer: 1500,
      });
    })
    .catch((error) => {
      console.error("Error:", error);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "El reporte no se pudo borrar",
        showConfirmButton: false,
        timer: 1500,
      });
    });
};
return (
  <Container className="mt-5">
    <div className="row">
      {reportes.map((reporte, index) => (
        reporte.estado && (
        <Card key={index} className="cards col-xl-4 col-md-6 col-sm-12">
          <Card.Header>
            {reporte.servicio} - {reporte.dia}
            <Button
              className="ms-4"
              variant="danger"
              onClick={() => handleDeleteReporte(reporte._id)}
            >
              Borrar
            </Button>
          </Card.Header>
          <Tabs
            defaultActiveKey="profile"
            id="justify-tab-example"
            className="mb-3"
            justify
          >
            <Tab eventKey="home" title="Informacion">
            <Card.Body>
            <Row>
              <Col>
                <p>De {reporte.siendo}: {reporte.nombre}</p>
                <p>Con: {reporte.guarda}</p>
                <p>Guarda: {reporte.con}</p>
                <p>Locomotora: {reporte.locomotora}</p>
                <p>N° ART: {reporte.art}</p>
              </Col>
            </Row>
          </Card.Body>
            </Tab>
            <Tab eventKey="profile" title="Observaciones">
                        
          <Card.Body>
            <Row>
              <Col>
                <p>{reporte.observaciones}</p>
              </Col>
            </Row>
          </Card.Body>
            </Tab>
          </Tabs>
        </Card>
        )
      ))}
    </div>
  </Container>
);
};

export default Inicio;