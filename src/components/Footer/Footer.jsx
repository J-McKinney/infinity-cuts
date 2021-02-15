import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Style from "./Footer.module.css";

function Footer(props) {
  return (
    <>
      <div className={Style.wrapper}>
        <Jumbotron className={Style.Jumbotron}>
          <Container className={Style.Container}>
            <Row className={Style.Row}>
              <Col id={Style.ColOne} className="col-md-7">
                <Row id="leftRow" className={Style.leftRow}>
                  <Col id="firstLeftCol" className={Style.firstLeftCol}>
                    <h3 id="h3" className={Style.content}>
                      Hello
                    </h3>
                  </Col>
                  <Col id="secondLeftCol" className={Style.secondLeftCol}>
                    <h3 id="h3" className={Style.content}>
                      World
                    </h3>
                  </Col>
                </Row>
              </Col>
              <Col id={Style.ColTwo} className="col-md-5">
                <h3 id="h3" className={Style.content}>
                  HelloWorld
                </h3>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    </>
  );
}

export default Footer;
