import React from 'react';

import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './routes/homeapp';
import Converter from './routes/converter';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/web-portA7" element={<Home />} />
      <Route path="/web-portA7/converter" element={<Converter />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
