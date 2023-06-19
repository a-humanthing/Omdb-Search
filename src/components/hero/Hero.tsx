import SearchInput from "../input/SearchInput"
import "./Hero.css"
import { instance } from "../../../axios.js"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Poster from "../movie/Poster.js"
import { useAppSelector } from "../../app/hooks.js"

const Hero = () => {
  type movieType = {
    Poster: string
    Title: string
    imdbID: string
    Year: number
    Type: string
  }
  const [poster, setPoster] = useState<movieType[]>([])
  const results = useAppSelector((state) => state.result.results)
  useEffect(() => {
    setPoster(results)
  }, [results])

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
        {poster &&
          poster.map((item) => (
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
