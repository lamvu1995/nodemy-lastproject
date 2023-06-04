import { createSlice } from '@reduxjs/toolkit'
let data = localStorage.getItem('user');
data = JSON.parse(data)
const initialState = {
  value: {}
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
        state.value = action.payload
    }
  },
})

export const { setUser } = userSlice.actions

export default userSlice.reducer