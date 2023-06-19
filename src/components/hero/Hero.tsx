import SearchInput from "../input/SearchInput"
import "./Hero.css"
import { instance } from "../../../axios.js"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Poster from "../movie/Poster.js"

const Hero = () => {
  type movieType = {
    Poster: string
    Title: string
    imdbID: string
    Year: number
    Type: string
  }
  const [poster, setPoster] = useState<movieType[]>([])
  async function fetchPoster() {
    try {
      const response = await instance.get(
        `/?apikey=${import.meta.env.VITE_API_KEY}&s=avatar`
      )
      console.log("response-", response)
      setPoster(response.data.Search)
    } catch (error) {
      console.log("response err", error)
    }
  }
  useEffect(() => {
    fetchPoster()
  }, [])
  return (
    <>
      <div className="heroContainer">
        <h1 className="headingText text-center">
          Watch Your Favorite Movies <br />{" "}
          <span className="text-danger">Now!</span>
        </h1>
        <SearchInput />
      </div>
      <div className="resultContainer">
        {poster.map((item) => (
          <Link to={`/${item.imdbID}`} className="link">
            <Poster
              key={item.imdbID}
              year={item.Year}
              type={item.Type}
              img={item.Poster}
              title={item.Title}
            />
          </Link>
        ))}
      </div>
    </>
  )
}

export default Hero
