import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  openModal: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user
    },
    setOpenModal: (state, action) => {
      state.openModal = action.payload.openModal
    },
  },
})

export const { setUser, setOpenModal } = userSlice.actions

export default userSlice.reducer
