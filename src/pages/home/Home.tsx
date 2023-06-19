import NavBar from "../../components/bar/NavBar"
import SearchInput from "../../components/input/SearchInput"
import { instance } from "../../../axios.js"
import { useState, useEffect } from "react"
import "./Home.css"
import { url } from "inspector"
import Hero from "../../components/hero/Hero.js"

const Home = () => {
  const [poster, setPoster] = useState("")
  async function fetchPoster() {
    try {
      const response = await instance.get(
        `/?apikey=${import.meta.env.VITE_API_KEY}&t=extraction`
      )
      console.log("response-", response)
      setPoster(response.data.Poster)
    } catch (error) {
      console.log("response err", error)
    }
  }
  useEffect(() => {
    fetchPoster()
  }, [])
  return (
    <>
      <NavBar />
      <Hero />
    </>
  )
}

export default Home
