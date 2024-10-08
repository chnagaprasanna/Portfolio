import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHackerrank, faCode } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by NAGA PRASANNA CHINTAMANENI</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} NP</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/prasanna-chintamaneni"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/chintamaneninagaprasanna/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://linktr.ee/chnagaprasanna"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
               <FontAwesomeIcon icon={faCode} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.hackerrank.com/profile/prasanna_ch"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faHackerrank} />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
