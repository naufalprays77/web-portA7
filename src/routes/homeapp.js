import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container, Button } from 'react-bootstrap';

import '../main.css';

import logo from '../assets/img/logo.png';
import logoFooter from '../assets/img/NPLogo1.1.png';

export default function Home() {
  return (
    <div>
      <Container fluid className="bg-home-grad">
        <Row className="text-center">
          <Col lg={8} md={8}>
            <Row className="main-center">
              <Col lg={4} md={6}>
                <img src={logo} className="logo-hero" alt="logo" />
              </Col>
              <Col lg={4} md={4} className="title">
                <h1>temperature converter</h1>
                <h3>Makes it easy for you to convert temperature</h3>
                <Button className="btn-calculate">
                  <Link to="/web-portA7/converter" className="text-calculate">
                    Calculate
                  </Link>
                </Button>
              </Col>
            </Row>
            <footer>
              Develope by <img src={logoFooter} className="footerLogo" alt="footerLogo" />{' '}
              <a href="https://www.instagram.com/naufalprays77/" className="link-footer">
                @naufalprays77
              </a>
              <br />
              version 3.1.1
            </footer>
          </Col>
          <Col className="bg-home-left text-white" lg={4} md={4}></Col>
        </Row>
      </Container>
    </div>
  );
}
