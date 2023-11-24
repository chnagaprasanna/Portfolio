import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Naga Prasanna Chintamaneni </span>
            from <span className="purple"> Eluru, India.</span>
            <br /> I am currently in the final year of my B.Tech program, specializing in AI & ML at KIET, Kakinada.
            <br />
            Additionally, I am currently working as an intern at IIIT-RCTS, Hyderabad.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Teaching
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">NAGA PRASANNA CH</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
