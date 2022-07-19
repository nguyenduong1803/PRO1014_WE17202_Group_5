import { configureStore } from "@reduxjs/toolkit"
import AuthSlice from "./SliceReducer/AuthSlice"
import AccountSlice from "./SliceReducer/AccountSlice"
import ManagerProductSlice from "./SliceReducer/Admin/ManagerProductSlice"

const store = configureStore({
    reducer: {
        AuthSlice: AuthSlice.reducer,
        AccountSlice: AccountSlice.reducer,
        ManagerProduct:ManagerProductSlice.reducer
    }
})
export default store