import { useEffect, useState } from "react"
import axios from "axios"
import swal from "sweetalert"
import { Link } from "react-router-dom"

const Resultado = () => {
    let query = new URLSearchParams(window.location.search)
    let movieSearch = query.get('movieSearch') 

    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        const endPointSearch =`https://api.themoviedb.org/3/search/movie?api_key=e7779603c897f31688d35627574dd345&language=en-US&page=1&query=${movieSearch}`
        axios
        .get(endPointSearch)
        .then(res => {
            const moviesResult = res.data.results
            setSearchResult(moviesResult)
            })
            .catch(error => {
                swal(<h2>Ocurrio un error. Intente nuevamente mas tarde</h2>)
            })
    })

    return(
        <>
        <div className='row m-3'>
            {searchResult.map((movie, idx) => {
                return (
                <div className='col-3 my-2' /* style={{height: '800px'}} */ key={idx}>
                <div className="card"  /* style ={{height: '750px'}} */ >
                    <img src= {`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} className="card-img-top" alt="Movie_Img" />
                    <div className="card-body bg-dark text-light">
                        <h5 className="card-title">{movie?.title}</h5>
                        <p className="card-text">{movie?.overview.substring(0,100)}...</p>
                        <Link to={`/detail?movieID=${movie?.id}`} className="btn btn-primary" style={{backgroundcolor: 'blueviolet'}}>View Detail</Link>
                    </div>
                </div>
            </div>)
            })}
        </div>
        </>
    )
    
}

export default Resultado