import { configureStore } from "@reduxjs/toolkit"
import AuthSlice from "./SliceReducer/AuthSlice"
// import ProductSlice from "./SliceReducer/ProductSlice"

const store = configureStore({
    reducer: {
        AuthSlice: AuthSlice.reducer,
        ProductSlice: AuthSlice.reducer
    }
})
export default store