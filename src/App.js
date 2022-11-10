import './App.css';
import Login from './components/Login/Login';
import Listado from './components/Listado/Listado';
import { Routes, Route } from 'react-router-dom'
/* import {useState, useEffect} from 'react' */
import Detail from './components/Detail/Detail'
import Header from './components/Header/Header'
import Footer from './components/Footer/Fotter'
import './style/style.scss'
import Contacto from './components/Contacto/Contacto';
import Resultado from './components/Resultado/Resultado';

function App() {

  return (
    
      <div className='divContainer'>
          <Header />
          <Routes>
            <Route path='/' element= {< Login />} />
            <Route path='/listado' element={< Listado />} />
            <Route path='/detail' element={< Detail />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/resultado' element={<Resultado />} />
          </Routes>
          <Footer />
          
      </div>
  );
}

export default App;
