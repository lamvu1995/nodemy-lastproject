import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: {value: 0},
    reducers: {
      tang: (state, action)=>{
        state.value += action.payload
      },
      giam: (state, action)=>{
        state.value -= action.payload
      },
    },
  })
  export default counterSlice.reducer