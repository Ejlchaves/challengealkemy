import { Link } from 'react-router-dom'
import './Header.css'
import SearchBar from '../Buscador/Buscador'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

const Header = () => {
    return(
        <Navbar bg="dark" expand="lg">
        <Container fluid>
          <Link to='/' className='logo navbar-brand text-light'>AllFilms.Com</Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Link className='navBtn nav-link active text-light m-2' to='/'>Home</Link>
            <Link className='navBtn nav-link text-light m-2' to='/listado'>List</Link>
            <Link className='navBtn nav-link text-light m-2' to='/favourites'>Favorites</Link>
            </Nav>
            <SearchBar />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Header