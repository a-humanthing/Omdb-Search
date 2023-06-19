import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type InitialState = {
  results: any
}
const initialState: InitialState = {
  results: [],
}

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
})
export const { setSearchResults, resetSearchResults } = resultSlice.actions
export default resultSlice.reducer
