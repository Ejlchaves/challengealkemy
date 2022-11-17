import './Listado.css'
import { useEffect, useState, useContext } from 'react'
import { Link, Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import swal from 'sweetalert'
import { FavsContext } from '../../Context/FavsContext'

const Listado = (props) =>{
    let token = sessionStorage.getItem('token')
    let [moviesList, setMoviesList] = useState([])

    const {addRemoveNewFilm} = useContext(FavsContext)

    const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=e7779603c897f31688d35627574dd345&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'

    
    useEffect (() => {
        axios
            .get(endPoint)
            .then(res => {
                const moviesApiCall = res.data.results
                setMoviesList(moviesApiCall)
            })
            .catch(error => {
                swal(<h2>Ocurrio un error. Intente nuevamente mas tarde</h2>)
            })
            
    }, [setMoviesList])  

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
            {moviesList.map((movie, idx) => {
                return (
                <div className='col-sm-12 col-md-4 col-lg-3 my-2' /* style={{height: '800px'}} */ key={idx}>
                <div className="card"  /* style ={{height: '500px', width:'350px'}} */  >
                    <img src= {`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" /* style={{height: '400px', width:'350px'}} */ alt="Movie_Img" />
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

export default Listado