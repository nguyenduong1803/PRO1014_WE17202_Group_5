import { configureStore } from "@reduxjs/toolkit"
import AuthSlice from "./SliceReducer/AuthSlice"
import AccountSlice from "./SliceReducer/AccountSlice"
import ManagerProductSlice from "./SliceReducer/Admin/ManagerProductSlice"
import OrderTableSlice from "./SliceReducer/OrderTableSlice"

const store = configureStore({
    reducer: {
        AuthSlice: AuthSlice.reducer,
        AccountSlice: AccountSlice.reducer,
        ManagerProduct:ManagerProductSlice.reducer,
        OrderTableSlice:OrderTableSlice.reducer
    }
})
export default store