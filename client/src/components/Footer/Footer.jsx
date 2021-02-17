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
                    <ul>
                      <h3 id="h3" className={Style.firstColContent}>
                        Shop
                      </h3>
                      <li>
                        <a
                          href="/search"
                          title="Search"
                          className={Style.searchLink}
                        >
                          <span>Search</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/pages/ContactUsPage"
                          title="Contact Us"
                          className={Style.contactLink}
                        >
                          <span>Contact Us</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/pages/WishListPage"
                          title="Wish List"
                          className={Style.wishListLink}
                        >
                          <span>Wish List</span>
                        </a>
                      </li>
                    </ul>
                  </Col>
                  <Col id="secondLeftCol" className={Style.secondLeftCol}>
                    <ul>
                      <h3 id="h3" className={Style.secondColContent}>
                        Information
                      </h3>
                      <li>
                        <a
                          href="/pages/PrivacyPolicyPage"
                          title="Privacy Policy"
                          className={Style.privacyPolicyLink}
                        >
                          <span>Privacy Policy</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/pages/RefundPolicyPage"
                          title="Refund Policy"
                          className={Style.refundPolicyLink}
                        >
                          <span>Refund Policy</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/pages/TermsOfServicePage"
                          title="Terms Of Service"
                          className={Style.termsOfServiceLink}
                        >
                          <span>Terms Of Service</span>
                        </a>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>
              <Col id={Style.ColTwo} className="col-md-5">
                <h3 id="h3" className={Style.thirdColContent}>
                  Stay Connected
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
