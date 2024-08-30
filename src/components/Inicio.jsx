import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col, Form, Button } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Swal from 'sweetalert2'


const Inicio = () => {
  const [reportes, setReportes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/reportes")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setReportes(data);
      })
      .catch((error) => console.error("Error loading reportes:", error));
  }, []);

  // Función para manejar la eliminación de un reporte
  const handleDeleteReporte = (id) => {

    fetch(`http://localhost:5000/api/reportes/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        
        // Actualizar la lista de reportes después de eliminar uno
        setReportes((prevReportes) =>
          prevReportes.filter((reporte) => reporte.id !== id)
        );
        Swal.fire({
          position: "top-end",
          icon: "info",
          title: "Se borro correctamente",
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "El reporte no se pudo borrar",
          showConfirmButton: false,
          timer: 1500
        });
      });
      
  };

  return (
    <Container className="mt-5">
      <div className="row">
        {reportes.map((reporte, index) => (
          <Card key={index} className="cards col-xl-4 col-md-6 col-sm-12">
            <Card.Header>
              {reporte.servicio} - {reporte.dia}
              <Button
                className="ms-4"
                variant="danger"
                onClick={() => handleDeleteReporte(reporte.id)}
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
                  <p>Con: {reporte.junto}</p>
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
        ))}
      </div>
    </Container>
  );
};

export default Inicio;