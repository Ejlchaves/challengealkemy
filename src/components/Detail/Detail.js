import axios from 'axios'
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

const Detail = () => {
    const token = sessionStorage.getItem('token')
    let query = new URLSearchParams(window.location.search)
    let movieID = query.get('movieID')

    const [detailMovie, setDetailMovie] = useState([])

    console.log(movieID)

    const endPointDetail = `https://api.themoviedb.org/3/movie/${movieID}?api_key=e7779603c897f31688d35627574dd345&language=en-US`;

    useEffect(() => {
        axios 
        .get(endPointDetail)
        .then(res => {
            const apiDetailCall = res.data
            console.log(apiDetailCall)
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
        <div className='row m-4 bg-dark p-3'>
            <img src={`https://image.tmdb.org/t/p/w500/${detailMovie.poster_path}`} className='col-6' style ={{height: '600px', width:'500px'}} alt='movie-img' />
            <div className='col-6 text-light'>
                 <h3>{detailMovie.title} </h3>
                 <h4>{detailMovie.tagline}</h4>
                 <h5>Release date: {detailMovie.release_date}</h5>
                 <h3>Overview</h3>
                 <p>{detailMovie.overview}</p>
                 <h4>Website: {detailMovie.homepage}</h4>
                 <h5>Rating: {detailMovie.vote_average}</h5>
                 <ul>Generos:
                    {detailMovie.genres?.map(movie => <li key={movie.id}>{movie.name}</li>)}
                 </ul>

            </div>
        </div>
    </>
        
    )
}

export default Detail