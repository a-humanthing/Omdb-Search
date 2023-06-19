import "./input.css"
import { FaSearch } from "react-icons/fa"

const SearchInput = () => {
  return (
    <>
      <div className="search">
        <div className="searchIcon" style={{ fontSize: "1.3em" }}>
          <FaSearch />
        </div>
        <input
          type="text"
          className="form-control searchInput"
          placeholder="Search For Movies."
        />
      </div>
    </>
  )
}

export default SearchInput
