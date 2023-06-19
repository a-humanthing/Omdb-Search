import { useState } from "react"
import "./input.css"
import { FaSearch } from "react-icons/fa"
import { useAppDispatch } from "../../app/hooks"
import { fetchResults } from "../../features/result/resultSlice"

const SearchInput = () => {
  const [title, setTitle] = useState("")
  const dispatch = useAppDispatch()
  const fetchResult = async () => {
    try {
      dispatch(fetchResults(title))
    } catch (error) {
      console.log("search err-", error)
    }
  }
  const handleKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") fetchResult()
  }

  return (
    <>
      <div className="search">
        <span className="searchIcon my-auto" onClick={() => fetchResult()}>
          <FaSearch />
        </span>
        <input
          type="text"
          value={title}
          onKeyDown={handleKey}
          onChange={(e) => setTitle(e.target.value)}
          className="form-control searchInput"
          placeholder="Search For Movies."
        />
      </div>
    </>
  )
}

export default SearchInput
