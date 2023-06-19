import SearchInput from "../input/SearchInput"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <div className="heroContainer">
        <h1 className="headingText text-center">
          Watch Your Favorite Movies <br />{" "}
          <span className="text-danger">Now!</span>
        </h1>
        <SearchInput />
      </div>
    </>
  )
}

export default Hero
