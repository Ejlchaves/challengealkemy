import axios from 'axios'
import { useEffect, useState} from 'react'
import { Navigate } from 'react-router-dom'
import './Detail.css'

const Detail = () => {
    const token = sessionStorage.getItem('token')
    let query = new URLSearchParams(window.location.search)
    let movieID = query.get('movieID')

    const [detailMovie, setDetailMovie] = useState([])

    const endPointDetail = `https://api.themoviedb.org/3/movie/${movieID}?api_key=e7779603c897f31688d35627574dd345&language=en-US`;

    useEffect(() => {
        axios 
        .get(endPointDetail)
        .then(res => {
            const apiDetailCall = res.data
            setDetailMovie(apiDetailCall)
        })
        
    }, [movieID]);

    if(!token) {
        return ( 
            <>
            {<Navigate to='/' />}
            </>
             )
    }

    return(
    <>
        <div className='row m-4 bg-dark p-3 container'>
            <img src={`https://image.tmdb.org/t/p/w500/${detailMovie.poster_path}`} className='col-6' style ={{height: '600px', width:'500px'}} alt='movie-img' />
            <div className='col-6 text-light'>
                 <h1 className='detalleTitulo'>{detailMovie.title} </h1>
                 <h3 className='detalleTitulo'>{detailMovie.tagline}</h3>
                 <h5>Release date: {detailMovie.release_date}</h5>
                 <h2>Overview</h2>
                 <p>{detailMovie.overview}</p>
                 <h5>Website: {detailMovie.homepage}</h5>
                 <h4>Rating: {detailMovie.vote_average}</h4>
                 <ul>Generes:
                    {detailMovie.genres?.map(movie => <li key={movie.id}>{movie.name}</li>)}
                 </ul>
            </div>
        </div>
    </>
        
    )
}

export default Detail