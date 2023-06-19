import { useState } from "react"
import "./input.css"
import { FaSearch } from "react-icons/fa"
import { instance } from "../../../axios"
import { useAppDispatch } from "../../app/hooks"
import {
  resetSearchResults,
  setSearchResults,
} from "../../features/result/resultSlice"

const SearchInput = () => {
  const [title, setTitle] = useState("")
  const dispatch = useAppDispatch()
  const fetchResult = async () => {
    try {
      const response = await instance.get(
        `?apikey=${import.meta.env.VITE_API_KEY}&s=${title}`
      )
      console.log("search res-", response)
      if (response.data?.Search) {
        dispatch(setSearchResults(response.data.Search))
      } else {
        dispatch(resetSearchResults())
      }
    } catch (error) {
      console.log("search err-", error)
    }
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
          onChange={(e) => setTitle(e.target.value)}
          className="form-control searchInput"
          placeholder="Search For Movies."
        />
      </div>
    </>
  )
}

export default SearchInput
