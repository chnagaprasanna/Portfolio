import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Attendance from "../../Assets/Projects/Attendance.png";
import Brightness from "../../Assets/Projects/Brightness.png";
import Dashboard from "../../Assets/Projects/Dashboard.png";
import Data from "../../Assets/Projects/Data.png";
import PlantDisease from "../../Assets/Projects/plantdisease.png";
import Volume from "../../Assets/Projects/Volume.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={Attendance}
              isBlog={false}
              title="Attendance System through Face Recognition"
              description="is a modern and efficient solution for recording and managing attendance in various settings, such as schools, universities, organizations, and businesses. This project leverages facial recognition technology to accurately identify and record the attendance of individuals."
              ghLink="https://github.com/prasanna-chintamaneni/AttendanceSystemThroughFaceRecognition"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Volume}
              isBlog={false}
              title="Volume Control Through Hand Gestures"
              description="It is a technology that allows users to adjust the volume of audio devices, such as speakers or headphones, by making specific hand movements or gestures."
              ghLink="https://github.com/prasanna-chintamaneni/volume-control-using-hand-detection"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Brightness}
              isBlog={false}
              title="Brightness control Through Hand Gestures"
              description="It is a cutting-edge technology that enables users to manage the brightness levels of displays or lighting systems by utilizing specific hand movements or gestures. In lieu of conventional controls such as buttons or sliders, this system employs advanced computer vision or sensor technologies to recognize and interpret hand gestures as commands for adjusting the brightness."
              ghLink="https://github.com/prasanna-chintamaneni/Brightness-Control-Through-Hand-Gestures"
              demoLink="#"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PlantDisease}
              isBlog={false}
              title="Plant Disease Detection using CNN"
              description="Plant disease detection and fertilizer prediction use machine learning to improve farming. With Convolutional Neural Networks (CNN), the system identifies plant diseases from images, allowing for quick treatment. It also predicts the best times and amounts of fertilizer to use, ensuring healthy crop growth and higher yields."
              ghLink="https://github.com/prasanna-chintamaneni/FinalYearProject"
              demoLink="https://npfinalyearproject.streamlit.app/x"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Data}
              isBlog={false}
              title="Performance Dashboard"
              description="Data Visualization is a powerful and insightful process that transforms raw data from databases into visually compelling representations. Through a variety of visualization techniques, complex datasets are presented in a way that is easy to understand, facilitating analysis, decision-making, and the identification of patterns or trends"
              ghLink="https://github.com/prasanna-chintamaneni/KIET-RCTS-TASK1"
              demoLink="https://prasanna-kiet-rcts-task-1.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dashboard}
              isBlog={false}
              title="Car Dashboard"
              description="This Car Dashboard is a web application built using React. It includes components like Navbar, Sidebar, Cards, PieCharts, Table, Form, and Footer. This project aims to provide a responsive and user-friendly interface for various functionalities"
              ghLink="https://github.com/prasanna-chintamaneni/KIET-RCTS-NOV-TASK"
              demoLink="https://nagaprasanna-kiet-rcts-nov-task.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
