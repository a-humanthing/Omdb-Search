import { Link } from "react-router-dom"
import "./NavBar.css"
import { RiMovie2Line } from "react-icons/ri"

const NavBar = () => {
  return (
    <div>
      <Link to={"/"} className="link">
        <h2 className="navHead">
          Movie Cart <RiMovie2Line />
        </h2>
      </Link>
    </div>
  )
}

export default NavBar
