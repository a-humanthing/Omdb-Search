import SearchInput from "../input/SearchInput"
import "./Hero.css"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Poster from "../movie/Poster.js"
import { useAppSelector } from "../../app/hooks.js"
import NoResult from "../../utils/noresult/NoResult.js"
import LoadingSpinner from "../../utils/loader/LoadingSpinner.js"
import Error from "../../utils/error/Error.js"

const Hero = () => {
  // type of data with essential fields
  type movieType = {
    Poster: string
    Title: string
    imdbID: string
    Year: number
    Type: string
  }
  const [poster, setPoster] = useState<movieType[]>([])

  //fetch search result from redux store
  const results = useAppSelector((state) => state.result.results)
  const loading = useAppSelector((state) => state.result.loading)
  const error = useAppSelector((state) => state.result.error)
  const isSearched = useAppSelector((state) => state.result.isSearched)

  useEffect(() => {
    setPoster(results)
  }, [results])

  return (
    <>
      <div className={`heroContainer ${isSearched ? "" : "initial"}`}>
        <h1 className="headingText text-center">
          Watch Your Favorite Movies <br />{" "}
          <span className="text-danger">Now!</span>
        </h1>
        <SearchInput />
      </div>
      {isSearched && (
        <div className="resultContainer">
          {loading ? <LoadingSpinner /> : ""}
          {!loading && poster?.length ? (
            poster.map((item) => (
              <Link key={item.imdbID} to={`/${item.imdbID}`} className="link">
                <Poster
                  year={item.Year}
                  type={item.Type}
                  img={item.Poster}
                  title={item.Title}
                />
              </Link>
            ))
          ) : !loading && !error ? (
            <NoResult />
          ) : (
            <Error error={error} />
          )}
        </div>
      )}
    </>
  )
}

export default Hero
