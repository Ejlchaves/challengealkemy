import './Listado.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Listado = () =>{

    const Navigate = useNavigate()
    const token = localStorage.getItem('token')


    useEffect(()=>{
        if(token === null) {
        Navigate('/')
     }
    }, [])

    return (
        <h1>Listado de Componentes</h1>
    )
}

export default Listado