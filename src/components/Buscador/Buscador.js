import {useNavigate} from 'react-router-dom'

const SearchBar = () => {

const Navigate = useNavigate()
const HandleSubmit = (e) => {
    e.preventDefault()
    let movieSearch = e.target.movieSearch.value.trim()

    if(movieSearch.length === 0) {
        console.log('Debes ingresar una palabra')
    } else if(movieSearch.length < 4) {
        console.log('Debes ingresar al menos 4 caracteres')
    } else {
        e.target.movieSearch.value = '';
        Navigate(`/resultado?movieSearch=${movieSearch}`)
    }
}

    return(
        <form className='searchContainer' onSubmit={HandleSubmit}>
            <input className='searchBar' placeholder='Search your film...' name="movieSearch" />
            <button type='submit'>Search</button>
        </form>
    )
}

export default SearchBar