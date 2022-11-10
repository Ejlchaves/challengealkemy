import { Link } from 'react-router-dom'
import './Header.css'
import SearchBar from '../Buscador/Buscador'

const Header = () => {

    return(
        <header className='header navbar container-fluid'>
            <nav className='navHeader container-fluid '>
                <div className='logoContainer container-fluid justify-content-evenly'>
                    <Link to='/' className='logo'>AllFilms.Com</Link>
                    <ul>
                        <li><Link className='navBtn' to='/'>Home</Link></li>
                        <li><Link className='navBtn' to='/listado'>List</Link></li>
                        <li><Link className='navBtn' to='/contacto'>Contact</Link></li>
                     </ul>
                    <SearchBar />
                </div>
            </nav>
        </header>
    )
}

export default Header