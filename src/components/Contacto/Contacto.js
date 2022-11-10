import { Navigate } from "react-router-dom"

const Contacto = () => {
    const token = sessionStorage.getItem('token')

    if(!token) {
        return ( 
            <>
            {<Navigate to='/' />}
            </>
             )
    }

    return (
        <h1>Detalles de Contacto</h1>
    )
}

export default Contacto