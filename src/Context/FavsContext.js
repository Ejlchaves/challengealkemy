import { createContext, useState, useEffect } from "react"
import { AddFilm } from "../Toast/Toast";

export const FavsContext = createContext([])

export const FavsContextProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const favsInLocal = localStorage.getItem('favs')

        if(favsInLocal !== null){
            const favsArr = JSON.parse(favsInLocal)
            setFavorites(favsArr)
        }
        
    }, []);

    const addRemoveNewFilm = e => {
        
    
        const favList = localStorage.getItem('favs')
        let tempMoviesFavs

        if(favList === null) {
            tempMoviesFavs = []
        } else {
            tempMoviesFavs = JSON.parse(favList)
        }

        const btn = e.currentTarget;
        const parent = btn.parentElement;
        const imgUrl = parent.querySelector('img').getAttribute('src')
        const title = parent.querySelector('h5').innerText
        const overview = parent.querySelector('p').innerText
        
        const moviesData = {
            imgUrl, 
            title,
            overview,
            id: btn.dataset.movieId
        }

        let moviesInArr = tempMoviesFavs.find(movie => movie.id === moviesData.id)
        if (!moviesInArr) {
            tempMoviesFavs.push(moviesData)
            localStorage.setItem('favs', JSON.stringify(tempMoviesFavs))
            setFavorites(tempMoviesFavs)
            AddFilm()
        } else {
            let removeMovie = tempMoviesFavs.filter(movie => movie.id !== moviesData.id)
            localStorage.setItem('favs', JSON.stringify(removeMovie))
            setFavorites(removeMovie)
            console.log('Se elimino de la lista de Favoritos')
        }
        
        
      }

      return(
        <FavsContext.Provider value={{addRemoveNewFilm, favorites}}>
        {children}
        </FavsContext.Provider>
    )
}

