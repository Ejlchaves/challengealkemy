import './Login.css'
import axios from 'axios'
import swal from 'sweetalert'
import { useNavigate, Navigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
 
const Login = () => {

    const redirect = useNavigate()
    const LoginHandler = e => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value

        //Utilizacion de expresion regular para validar mail
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if(email === '' || password === '') {
            return(
                swal(<h2>Debes completar todos los campos del formulario</h2>)
            )
        }

        if(email !== '' && !regexEmail.test(email)) {
            return(
                swal(<h2>Debes utilizar un formato de mail valido</h2>)
            )
        }

        if(email !== 'challenge@alkemy.org' || password !== 'react'){
            return(
                <>
                swal({
                     <h2>Correo electronico y/o contraseña incorrectos</h2>})
                </>
            )
        }

        swal('Haz ingresado correctamente')
        
            axios
            .post('https://cors-anywhere.herokuapp.com/http://challenge-react.alkemy.org', { email, password })
            .then(res =>{
                const token = res.data.token
                sessionStorage.setItem('token', token)
                redirect('/listado')
            })

    }

    if (sessionStorage.getItem('token') != null) {
        return (
            <>
            { <Navigate to='/listado' /> }
            </>
        )
    }
   
    return(
        <Form onSubmit={LoginHandler} className='container bg-dark p-2' style={{height:'25rem', width:'25rem'}}>
                <h1 className='tituloLogin  text-light'>Welcome to AllFilms</h1>
                <h2 className='text-light'>Sign In!</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='text-light'>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name='email' />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='text-light'>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name='password' />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default Login
