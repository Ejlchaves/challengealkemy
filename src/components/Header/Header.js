import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {

    return(
        <header className='header'>
            <nav className='navHeader'>
                <div className='logoContainer'>
                    <h1 className='logo'>AllFilms.Com</h1>
                    <ul>
                        <li><Link className='navBtn' to='/'>Home</Link></li>
                        <li><Link className='navBtn' to='/listado'>List</Link></li>
                        <li><Link className='navBtn' to='/contacto'>Contact</Link></li>
                     </ul>
                    <div className='searchContainer'>
                        <input className='searchBar' placeholder='Search...' />
                        <button type='submit'>Search</button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header