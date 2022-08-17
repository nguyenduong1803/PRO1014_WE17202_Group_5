import { configureStore } from "@reduxjs/toolkit"
import AuthSlice from "./SliceReducer/AuthSlice"
import AccountSlice from "./SliceReducer/AccountSlice"
import ManagerProductSlice from "./SliceReducer/ManagerProductSlice"
import OrderTableSlice from "./SliceReducer/OrderTableSlice"
import CategorySlice from "./SliceReducer/CategorySlice"
import StatictialSlice from "./SliceReducer/StatictialSlice"

const store = configureStore({
    reducer: {
        AuthSlice: AuthSlice.reducer,
        AccountSlice: AccountSlice.reducer,
        ManagerProduct:ManagerProductSlice.reducer,
        OrderTableSlice:OrderTableSlice.reducer,
        CategorySlice:CategorySlice.reducer,
        StatictialSlice:CategorySlice.reducer,
    }
})
export default store