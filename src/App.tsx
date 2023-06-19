import { Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./pages/home/Home"
import "bootstrap/dist/css/bootstrap.min.css"
import Movie from "./pages/movie/Movie"

function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Movie />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
