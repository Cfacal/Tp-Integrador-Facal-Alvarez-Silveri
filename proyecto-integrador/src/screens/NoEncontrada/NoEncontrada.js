import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./NoEncontrada.css";


function NoEncontrada() {
    return (
        <React.Fragment>
        <Navbar/>
        <div className="noencontrada">
,       <h1>Error 404 no se encontró esta página</h1>
        </div>
        <Footer/>
        </React.Fragment>
      );
    };

    export default NoEncontrada;