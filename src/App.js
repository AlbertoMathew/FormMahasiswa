import React from "react";
import "./App.css";
import 'bootstrap';
import './style.scss';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Tabel from './pages/Tabel';
import TambahMahasiswa from "./pages/TambahMahasiswa";
import UbahMahasiswa from "./pages/UbahMahasiswa";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TambahMahasiswa />} />
        <Route path="Tabel" element={<Tabel />} />
        <Route path="TambahMahasiswa" element={<TambahMahasiswa />} />
        <Route path="UbahMahasiswa" element={<UbahMahasiswa />} />
      </Routes>
    </BrowserRouter>
  )
};



export default App;
