import React, { useState } from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';

import '../main.css';

import celciusImg from '../assets/img/celcius.png';
import reamurImg from '../assets/img/reamur.png';
import farenheitImg from '../assets/img/farenheit.png';
import kelvinImg from '../assets/img/kelvin.png';
import logoFooter from '../assets/img/NPLogo1.1.png';

export default function Converter() {
  const [celsiusVal, setValue] = useState();
  const temperature = document.getElementsByClassName('input');
  const celciusInput = document.getElementById('celcius');
  const reamurInput = document.getElementById('reamur');
  const fahrenheitInput = document.getElementById('fahrenheit');
  const kelvinInput = document.getElementById('kelvin');

  for (let i = 0; i < temperature.length; i++) {
    let input = temperature[i];

    input.addEventListener('input', function (e) {
      let value = parseFloat(e.target.value);
      switch (e.target.name) {
        case 'celcius':
          reamurInput.value = value * 0.8;
          fahrenheitInput.value = value * 1.8 + 32;
          kelvinInput.value = value + 273;
          break;
        case 'reamur':
          celciusInput.value = value * 1.25;
          fahrenheitInput.value = value * 2.25 + 32;
          kelvinInput.value = value * 1.25 + 273;
          break;
        case 'fahrenheit':
          celciusInput.value = (value - 32) / 1.8;
          reamurInput.value = ((value - 32) / 1.8) * 0.8;
          kelvinInput.value = (value - 32) / 1.8 + 273;
          break;
        case 'kelvin':
          celciusInput.value = value - 273;
          reamurInput.value = (value - 273) * 0.8;
          fahrenheitInput.value = (value - 273) * 1.8 + 32;
          break;
        default:
          /* code */
          break;
      }
    });
  }

  return (
    <div>
      <Container fluid className="bg-home-grad">
        <Row className="text-center justify-content-center pb-5 padd-mobile">
          <h1 className="titleCard">temperature conversion</h1>
          <Col lg={2} md={5} xs={6}>
            <Card className="bg-card-degree">
              <img src={celciusImg} className="imgDegree" alt="celcius" />
              <Card.Body className="formDegree">
                <input type="number" name="celcius" id="celcius" class="input" placeholder="Celcius" onChange={(e) => setValue(e.target.value)} />
              </Card.Body>
            </Card>
          </Col>
          <Col lg={2} md={5} xs={6}>
            <Card className="bg-card-degree">
              <img src={reamurImg} className="imgDegree" alt="reamur" />
              <Card.Body className="formDegree">
                <input type="number" name="reamur" id="reamur" class="input" placeholder="Reamur" onChange={(e) => setValue(e.target.value)} />
              </Card.Body>
            </Card>
          </Col>
          <Col lg={2} md={5} xs={6}>
            <Card className="bg-card-degree">
              <img src={farenheitImg} className="imgDegree" alt="fahrenheit" />
              <Card.Body className="formDegree">
                <input type="number" name="fahrenheit" id="fahrenheit" class="input" placeholder="Fahrenheit" onChange={(e) => setValue(e.target.value)} />
              </Card.Body>
            </Card>
          </Col>
          <Col lg={2} md={5} xs={6}>
            <Card className="bg-card-degree">
              <img src={kelvinImg} className="imgDegree" alt="kelvin" />
              <Card.Body className="formDegree">
                <input type="number" name="kelvin" id="kelvin" class="input" placeholder="Kelvin" onChange={(e) => setValue(e.target.value)} />
              </Card.Body>
            </Card>
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
      </Container>
    </div>
  );
}
