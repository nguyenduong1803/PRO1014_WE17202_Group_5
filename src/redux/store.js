import {ConfigureStore} from "@reduxjs/toolkit"
import AuthSlice from "./SliceReducer/AuthSlice"
import ProductSlice from "./SliceReducer/ProductSlice"

const store =ConfigureStore({
    AuthSlice:AuthSlice.reducer,
    ProductSlice:AuthSlice.reducer
})