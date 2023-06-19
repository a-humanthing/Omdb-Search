import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"
import { instance } from "../../../axios"

type movieType = {
  Poster: string
  Title: string
  imdbID: string
  Year: number
  Type: string
}
type InitialState = {
  results: movieType[]
  loading: boolean
  error: string
  isSearched: boolean
}
const initialState: InitialState = {
  results: [],
  loading: false,
  error: "",
  isSearched: false,
}

export const fetchResults = createAsyncThunk(
  "result/fetchResult",
  async (title: string) => {
    const response = await instance.get(
      `?apikey=${import.meta.env.VITE_API_KEY}&s=${title}`
    )
    return response.data?.Search
  }
)

const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    setSearchResults: (state, action: PayloadAction<any[]>) => {
      state.results = action.payload
    },
    resetSearchResults: (state) => {
      state.results = []
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchResults.pending, (state) => {
      state.isSearched = true
      state.loading = true
    })
    builder.addCase(
      fetchResults.fulfilled,
      (state, action: PayloadAction<movieType[]>) => {
        state.loading = false
        state.results = action.payload
        state.error = ""
      }
    )
    builder.addCase(fetchResults.rejected, (state, action) => {
      state.loading = false
      state.results = []
      state.error = action.error.message || "Something Went Wrong."
    })
  },
})
export const { setSearchResults, resetSearchResults } = resultSlice.actions
export default resultSlice.reducer
