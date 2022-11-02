import './App.css';
import Login from './components/Login/Login';
import Listado from './components/Listado/Listado';
import { Routes, Route, /* useParams */ } from 'react-router-dom'
/* import {useState, useEffect} from 'react' */


function App() {
/*   const {page} = useParams()
  const [clase, setClase] = useState('divContainerLogin')

  useEffect(() => {
    if(page !== clase) {
      setClase('divContainer')
    }
    
  }, []); */

  return (
    <div className='divContainer'>
      <Routes>
        <Route path='/' element= {< Login />} />
        <Route path='/listado' element={< Listado />} />
      </Routes>
    </div>
  );
}

export default App;
