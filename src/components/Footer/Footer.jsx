import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Style from "./Footer.module.css";

function Footer(props) {
  return (
    <>
      <div className={Style.wrapper}>
        <Jumbotron>
          <Row>
            <Col className="col-sm-6">Hello</Col>
            <Col className="col-sm-6">World</Col>
          </Row>
        </Jumbotron>
      </div>
    </>
  );
}

export default Footer;
