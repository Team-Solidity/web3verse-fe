import { configureStore } from '@reduxjs/toolkit'
import profileReducer from './profile/profileSlice'

export default configureStore({
  reducer: {
    profile : profileReducer,
  },
})