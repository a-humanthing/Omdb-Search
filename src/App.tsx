import { Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./pages/home/Home"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
