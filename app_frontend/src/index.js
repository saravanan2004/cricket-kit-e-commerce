import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MediaCard from './MediaCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route index element={<MediaCard />} />
          <Route path="/home" element={<MediaCard />} />
          <Route path="/App" element={<App />} />
          <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);


