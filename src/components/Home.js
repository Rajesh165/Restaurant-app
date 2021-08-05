import React from "react";
import "../css/Home.css";
import {
  CardImg,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";

function RenderCard({ item }) {
  return (
    <Card>
      <CardImg
        src={item.image}
        alt={item.name}
        className="card-image"
      ></CardImg>{" "}
      <CardBody>
        <CardTitle> {item.name} </CardTitle>{" "}
        {item.designation ? (
          <CardSubtitle> {item.designation} </CardSubtitle>
        ) : null}{" "}
        <CardText> {item.description} </CardText>{" "}
      </CardBody>{" "}
    </Card>
  );
}

function Home({ dish, promotion, leader }) {
  return (
    <div className="container">
      <div className="row align-item-start">
        <div className="col-12 col-md col-1 mt-2">
          <RenderCard item={dish} />{" "}
        </div>{" "}
        <div className="col-12 col-md col-1 mt-2">
          <RenderCard item={promotion} />{" "}
        </div>{" "}
        <div className="col-12 col-md col-1 mt-2">
          <RenderCard item={leader} />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Home;
