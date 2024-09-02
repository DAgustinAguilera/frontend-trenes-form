import React, { useState, useEffect } from 'react';
import { Container, Card, Row, Col, Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2'

export const FormContainer = () => {
  const [formData, setFormData] = useState({
    servicio: '',
    locomotora: '',
    siendo: '',
    nombre: '',
    guarda: '',
    con: '',
    art: '',
    dia: '',
    observaciones: '',
    estado: true
  });

  const [data, setData] = useState({
    servicios: [],
    locomotoras: [],
    guardas: [],
    conductores: [],
    pres: [],
    estado: true
  });

  const [nombreOptions, setNombreOptions] = useState([]); // Definir nombreOptions
  const [juntoOptions, setJuntoOptions] = useState([]);   // Definir juntoOptions

  const LOCAL_BASE_BACKEND_URL = import.meta.env.VITE_PUBLIC_BASE_BACKEND_URL || "http://localhost:4000";


  useEffect(() => {
    fetch(`${LOCAL_BASE_BACKEND_URL}/db`)
      .then(async (response) => {
        const resJSON = await response.json();
        setData(resJSON["data"][0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log('Updating options based on "siendo":', formData.siendo);
    if (formData.siendo === 'Conductor') {
      console.log('Setting options for conductor');
      setNombreOptions(data.conductores);
      setJuntoOptions(data.pres);
    } else if (formData.siendo === 'Pre') {
      console.log('Setting options for pre');
      setNombreOptions(data.pres);
      setJuntoOptions(data.conductores);
    } else {
      setNombreOptions([]);
      setJuntoOptions([]);
    }
    console.log('Nombre options:', nombreOptions);
    console.log('Junto options:', juntoOptions);
  }, [formData.siendo, data]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:4000/reporte', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);

        // Limpiar el formulario después de enviar
        setFormData({
          servicio: '',
          locomotora: '',
          siendo: '',
          nombre: '',
          guarda: '',
          con: '',
          art: '',
          dia: '',
          observaciones: '',
          estado: true
        });

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Reporte agregado correctamente",
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

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
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={4}>
                <h6>Primera Columna</h6>
                <Form.Group>
                  <Form.Label htmlFor="servicio">Usted realizó el servicio:</Form.Label>
                  <Form.Control as="select" id="servicio" value={formData.servicio} onChange={handleChange}>
                    <option value="">Seleccione...</option>
                    {data.servicios.map((c, index) => (
                      <option key={index} value={c}>{c}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="locomotora">Con la locomotora:</Form.Label>
                  <Form.Control as="select" id="locomotora" value={formData.locomotora} onChange={handleChange}>
                    <option value="">Seleccione...</option>
                    {data.locomotoras.map((c, index) => (
                      <option key={index} value={c}>{c}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="siendo">Siendo usted:</Form.Label>
                  <Form.Control as="select" id="siendo" value={formData.siendo} onChange={handleChange}>
                    <option value="">Seleccione...</option>
                    <option value="Conductor">Conductor</option>
                    <option value="Pre">Pre</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="nombre">De nombre:</Form.Label>
                  <Form.Control as="select" id="nombre" value={formData.nombre} onChange={handleChange}>
                    <option value="">Seleccione...</option>
                    {nombreOptions.map((nombre, index) => (
                      <option key={index} value={nombre}>{nombre}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="guarda">Junto a:</Form.Label>
                  <Form.Control as="select" id="guarda" value={formData.guarda} onChange={handleChange}>
                    <option value="">Seleccione...</option>
                    {juntoOptions.map((junto, index) => (
                      <option key={index} value={junto}>{junto}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="con">Con el guarda:</Form.Label>
                  <Form.Control as="select" id="con" value={formData.con} onChange={handleChange}>
                    <option value="">Seleccione...</option>
                    {data.guardas.map((g, index) => (
                      <option key={index} value={g}>{g}</option>
                    ))}
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
                    value={formData.art}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="dia">Día:</Form.Label>
                  <Form.Control type="date" id="dia" value={formData.dia} onChange={handleChange} />
                </Form.Group>
              </Col>
              <Col md={4}>
                <h6>Tercera Columna</h6>
                <Form.Group>
                  <Form.Label htmlFor="observaciones">Observaciones especiales:</Form.Label>
                  <Form.Control
                    as="textarea"
                    id="observaciones"
                    rows={5}
                    value={formData.observaciones}
                    onChange={handleChange}
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
