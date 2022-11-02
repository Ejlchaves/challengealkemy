import './Login.css'
import axios from 'axios'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'
 
const Login = () => {

    const Navigate = useNavigate()
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
            .post('http://challenge-react.alkemy.org', { email, password })
            .then(res =>{
                const token = res.data.token
                localStorage.setItem('token', token)
                Navigate('/listado')
            })

    }

    return(
        <>
        <div className='modalLogin'>
            <h1 className='tituloLogin'>Welcome to AllFilms</h1>
            <h2>Sign In!</h2>
            <form onSubmit={LoginHandler} className='formContainer'>
                <label>
                    <div>Email</div>
                    <input type='email' name='email'/>
                </label>
                <br />
                <label>
                    <div>Password</div>
                    <input type='password' name='password'/>
                </label>
                <br />
                <button type="submit" className='btnLogin'>Submit</button>
            </form>
        </div>
        </>
    )
}

export default Login