import React from "react";
import { Header } from "./components/Header/index";
import 'boxicons'
import { BrowserRouter as Router } from 'react-router-dom'
import {Paginas} from "./components/Paginas";
import { DataProvider } from "./context/DataProvider";
import { Carrito } from "./components/Carrito";



function App() {
  return (
    <DataProvider>    
      <div className="App">
        <Router>
    
          <Header /> 
          <Carrito/>     
          <Paginas/>
          
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
