import {configureStore} from "@reduxjs/toolkit"
import loaderReducer from "./LoadersSlice"
import userReducer from "./UserSlice"


const store = configureStore({
  reducer: {
    loader : loaderReducer,
    user : userReducer,

  }
})




export default store
