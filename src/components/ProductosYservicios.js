import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import "../estilos/productosYservicios.css";

export const ProductosYservicios = () => {
  return (
    <div className="contenedorPyS" id="Productos-y-servicios">
      <div className="contenidoPyS">
        <Stack direction="horizontal" gap={3}>
          <div>
            <Card style={{ width: "25vw" }}>
              <Card.Img
                variant="top"
                src={require("../media/img/Mantenimiento.jpg")}
              />
              <Card.Body>
                <Card.Title>Mantenimiento</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button className="button"> Cotizar</Button>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "25vw" }}>
              <Card.Img
                variant="top"
                src={require("../media/img/Aseo.jpg")}
              />
              <Card.Body>
                <Card.Title>Aseo Institucional</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button className="button"> Cotizar</Button>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "25vw" }}>
              <Card.Img
                variant="top"
                src={require("../media/img/Plagas.jpeg")}
              />
              <Card.Body>
                <Card.Title>Control de plagas</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button className="button"> Cotizar</Button>
              </Card.Body>
            </Card>
          </div>
        </Stack>
      </div>
    </div>
  );
};

export default ProductosYservicios;
