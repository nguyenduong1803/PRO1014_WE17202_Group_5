import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { getToken } from "../../utils/Common"
const api = "http://127.0.0.1:8000/api/"
const tableOrder = {
    tableId: "",
    name: "",
    phone:"",
    countGuest: 1,
    celendar: ""
}
const OrderTableSlice = createSlice({
    name: "orderTable",
    initialState: {
        status: "idle",
        order: [],
        isSuccess: false,
        orderTable: tableOrder,
        cart:[]
    },
    reducers: {
        updateOrderTable:(state, action)=>{
                return {...state,orderTable:action.payload}
        },
        updateCart:(state, action)=>{
                return {...state,cart:action.payload}
        }
    },
    extraReducers: buiders => {
        buiders
            .addCase(getListTable.pending, (state) => {
                state.status = "loading"
            }).addCase(getListTable.fulfilled, (state, action) => {
                if (action.payload.status === "success") {
                    state.tables = action.payload.data
                    state.isSuccess = true
                    state.status = "idle"
                } else {
                    state.isSuccess = false
                    state.status = "idle"
                }
            }).addCase(orderTable.fulfilled, (state, action) => {
                state.order = action.payload
            })

    }
})
export const getListTable = createAsyncThunk("orderTable/getListTable", async (payload, action) => {
    let payloads
    await axios
        .get(api + "tables/lists")
        .then(response => {
            payloads = { data: response.data.data, status: "success" }
        }).catch(function (err) {
            console.log(err)
            payloads = { data: "", status: err.response.status }
        })
    return payloads
})
export const orderTable = createAsyncThunk("orderTable/orderTable", async (payload, action) => {
    let payloads
    await axios
        .post(api + "tableBook/create",
            {
                name_user: payload.name,
                id_table: 4,
                status_book: 2,
                phone: payload.phone,
                total_user: payload.countGuest,
                time_book: "2022-07-21 23:41:30",
            },
            {
                headers: { "Authorization": `Bearer ${getToken()}` },
            })
        .then(response => {
            console.log(response)
            payloads = { data: response.data.data, status: "success" }
        }).catch(function (err) {
            console.log(err)
            payloads = { data: "", status: err.response.status }
        })
    return payloads
})
export const updateOrderTable = (payload,action)=>{
    return { type: "orderTable/updateOrderTable", payload }
}
export const updateCart = (payload,action)=>{
    return { type: "orderTable/updateCart", payload }
}

export default OrderTableSlice