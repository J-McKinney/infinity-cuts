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
          <Row className={Style.topRow}>
            <Col id={Style.topLeftCol} className="col-lg-6">
              <Row className={Style.upperLeftRow}>
                <Col className="col-sm-12" id={Style.leftCol}>
                  <h5>Hello</h5>
                </Col>
              </Row>
            </Col>
            <Col id={Style.topRightCol} className="col-lg-6">
              <Row className={Style.upperRightRow}>
                <Col className="col-sm-12" id={Style.rightCol}>
                  <h5>World</h5>
                </Col>
              </Row>
            </Col>
          </Row>
        </Jumbotron>
      </div>
    </>
  );
}

export default Footer;
