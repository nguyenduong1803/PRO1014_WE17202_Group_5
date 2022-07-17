import { configureStore } from "@reduxjs/toolkit"
import AuthSlice from "./SliceReducer/AuthSlice"
import AccountSlice from "./SliceReducer/AccountSlice"

const store = configureStore({
    reducer: {
        AuthSlice: AuthSlice.reducer,
        AccountSlice: AccountSlice.reducer
    }
})
export default store