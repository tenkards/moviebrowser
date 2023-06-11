import Hero from "./Hero";
import { Link } from "react-router-dom";



//marvel api key
// a1c38ba82f98aeb0971291e2a821d0c8
// link             https://gateway.marvel.com:443/v1/public/comics?apikey=a1c38ba82f98aeb0971291e2a821d0c8

// themoviedb api ee48449b7f369f9437d6b87ffc8425e4
// example link     'https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=ee48449b7f369f9437d6b87ffc8425e4'


const defaultPoster = "https://plus.unsplash.com/premium_photo-1686090450574-214118216bdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" //default poster for if the actual movie poster does not exist

const MovieCard = ({ movie }) => {
  const posterUrl = movie.poster_path
  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
  : defaultPoster
  // const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}` this is for absolute, while the first one is for "if true, render '?', otherwise, use ':' as the default."

  
  const detailUrl = `/movies/${movie.id}`

  return (
      <div className="col-lg-23 col-md-3 col-2 my-4">
      <div className="card" >
      <img src={posterUrl} className="card-img-top" alt={movie.original_title}/>
      <div className="card-body">
        <h5 className="card-title">{movie.original_title}</h5>
        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
        <Link to={detailUrl} className="btn btn-primary">Show details</Link>
      </div>
       </div>
       </div>

  )
}







const SearchView = ({ keyword, searchResults }) => { //() is an anonymous arrow function, so it can be written as a component
    const title = `You are searching for ${keyword}`

    if (searchResults.length === 0) { //if there are 0 similar texts in the search results. You can also do it in the resultsHTML line
      return (
        <>
          <Hero text={title} />
          <h2>No results found for "{keyword}"</h2>
        </>
      );
    }
  


    const resultsHtml = searchResults.map((movie, index) => ( //can both take any name
      <MovieCard movie={movie} key={index} />
    ));

    return (
      <>
        <Hero text={title} />
        {resultsHtml &&
          <div className="container">
          <div className="row">
            {resultsHtml}
            </div>
            </div>
}
      </>
    )
  }

  export default SearchView;
  