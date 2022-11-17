import { useContext } from "react"
import { FavsContext } from "../../Context/FavsContext"
import { Link, Navigate } from "react-router-dom"
import './Favourites.css'

const Favourites = () => {
    const {favorites, addRemoveNewFilm} = useContext(FavsContext)
    let token = sessionStorage.getItem('token')


    if(!token) {
        return ( 
            <>
            {<Navigate to='/' />}
            </>
             )
    }
    return (
        <>
        <div className='row m-3'>
            {favorites.map((movie, idx) => {
                return (
                <div className='col-sm-12 col-md-4 col-lg-3 my-2'key={idx}>
                <div className="card">
                    <img src={movie.imgUrl} className="card-img-top" alt="Movie_Img" />
                    <button className='btn-fav' onClick={(e) => addRemoveNewFilm(e)} data-movie-id={movie.id}>💜</button>
                    <div className="card-body bg-dark text-light">
                        <h5 className="card-title">{movie.title}</h5>
                        <p className="card-text">{movie.overview.substring(0,100)}...</p>
                        <Link to={`/detail?movieID=${movie.id}`} className="btn btn-primary" style={{backgroundcolor: 'blueviolet'}}>View Detail</Link>
                    </div>
                </div>
            </div>)
            })}
        </div>
        </>

    )
}

export default Favourites