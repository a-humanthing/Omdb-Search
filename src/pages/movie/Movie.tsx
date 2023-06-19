import { useParams } from "react-router-dom"
import NavBar from "../../components/bar/NavBar"
import "./Movie.css"
import { useEffect, useState } from "react"
import { instance } from "../../../axios"
import { AiFillStar } from "react-icons/ai"
import LoadingSpinner from "../../utils/loader/LoadingSpinner"

const Movie = () => {
  type MovieData = {
    Title: string
    Poster: string
    Genre: string
    Director: string
    Actors: string
    Plot: string
    imdbRating: string
    Year: string
    Rated: string
    Runtime: string
  }
  const params = useParams()
  const movieId = params.id
  const [movie, setMovie] = useState<MovieData>({
    Title: "",
    Poster: "",
    Genre: "",
    Plot: "",
    Actors: "",
    Director: "",
    imdbRating: "",
    Year: "",
    Rated: "",
    Runtime: "",
  })
  const [loading, setLoading] = useState(true)
  const fetchMovieDetails = async () => {
    setLoading(true)
    try {
      const response = await instance.get(
        `?apikey=${import.meta.env.VITE_API_KEY}&i=${movieId}`
      )
      if (response.data.Title) {
        setMovie(response.data)
      }
    } catch (error) {
      console.log("fetch movie error", error)
    }
    setLoading(false)
  }
  useEffect(() => {
    fetchMovieDetails()
  }, [])
  return (
    <>
      <NavBar />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="movie-details">
          <div className="posterDiv">
            <img
              className="movie-poster"
              src={movie.Poster}
              alt={movie.Title}
            />
          </div>
          <div className="dataDiv">
            <div className="titleContainer">
              <div>
                <h2 className="movie-title">{movie.Title}</h2>
                <span className="time">
                  {movie.Year} | {movie.Runtime} | {movie.Rated}
                </span>
              </div>
              <div>
                <p className="movie-rating">
                  Rating: {movie.imdbRating}{" "}
                  <span className="star">
                    <AiFillStar />
                  </span>
                </p>
              </div>
            </div>
            <div className="overView">
              <h4>OVERVIEW</h4>
              <p className="movie-description">{movie.Plot}</p>
              <p className="movie-director">Director: {movie.Director}</p>
              <p className="movie-cast">Cast: {movie.Actors}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Movie
