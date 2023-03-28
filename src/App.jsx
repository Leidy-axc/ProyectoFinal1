import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Logo from './components/Logo';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import ItemListContainer from "./components/ItemListContainer";

//import { CartContext } from "../contexts/CartContext";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App container ">     
        <BrowserRouter>   
          <Logo/> 
          <Menu/>
          <Header/>     
            <Routes>
                <Route path="/" element={<ItemListContainer />} /> 
                <Route path="/:idCategory" element={<ItemListContainer />} />               
            </Routes>
        </BrowserRouter>

    <div className="row">
      <div className="col p-0">
      <ItemListContainer/>
      </div>
    </div>
        <Footer/>
        
        </div>

  )
}

export default App
