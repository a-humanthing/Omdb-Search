import { useParams } from "react-router-dom"
import NavBar from "../../components/bar/NavBar"
import "./Movie.css"
import { useEffect, useState } from "react"
import { instance } from "../../../axios"

const Movie = () => {
  type Rating = {
    Source: string
    Value: string
  }
  type MovieData = {
    Title: string
    Poster: string
    Genre: string
    Director: string
    Actors: string
    Plot: string
    Ratings: Rating[]
  }
  const params = useParams()
  const [movieId, setMovieId] = useState(params.id)
  const [movie, setMovie] = useState<MovieData>({
    Title: "",
    Poster: "",
    Genre: "",
    Plot: "",
    Actors: "",
    Director: "",
    Ratings: [],
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
      {loading && "Loading"}
      {movie.Title}
    </>
  )
}

export default Movie
