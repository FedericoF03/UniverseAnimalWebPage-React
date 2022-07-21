import Index from "./Components/Index/Index";
import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Info from "./Components/Info/info";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Donaciones from './Components/donaciones/donaciones'
import Galeria from './Components/Galeria/Galeria'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/info" element={<Info/>}/>
          <Route path="/Galeria" element={<Galeria/>}/>
          <Route path="/Donaciones" element={<Donaciones/>}/>
          <Route path="/*" element={"Ruta de error"}/>
        </Routes>
        <Footer/>
      </BrowserRouter> 
    </div>
  );
};

export default App;
