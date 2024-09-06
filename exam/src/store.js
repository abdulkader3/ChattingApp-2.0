import { configureStore } from '@reduxjs/toolkit'
import shanto from './slise/rudux'

export default configureStore({
  reducer: {
    exam: shanto,
  },
})
