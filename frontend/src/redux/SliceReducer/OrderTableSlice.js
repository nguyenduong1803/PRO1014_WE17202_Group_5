import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
const api = "http://127.0.0.1:8000/api/"

const OrderTableSlice = createSlice({
    name: "orderTable",
    initialState: {
        status: "idle",
        order:[],
        isSuccess: false,
        tables:[]
    },
    reducers: {
        
    },
    extraReducers: buiders => {
        buiders
            .addCase(getListTable.pending, (state) => {
                state.status = "loading"
            }).addCase(getListTable.fulfilled, (state, action) => {
                console.log(action.payload)
                if (action.payload.status === "success") {
                    state.tables = action.payload.data
                    state.isSuccess = true
                    state.status = "idle"
                } else {
                    state.isSuccess = false
                    state.status = "idle"
                }
            })
          
    }
})
export const getListTable = createAsyncThunk("orderTable/getListTable", async (payload, action) => {
    let payloads
    console.log(payload, action)
    await axios
        .get(api + "tables/lists")
        .then(response => {
            console.log(response.data)
            payloads = { data: response.data.data, status: "success" }
        }).catch(function (err) {
            console.log(err)
            payloads = { data: "", status: err.response.status }
        })
    return payloads
})

// export const deleteProductById = createAsyncThunk("product/deleteProductById", async (payload, action) => {
//     let payloads
//     console.log(payload, action)
//     await axios
//         .delete(api + `product/delete/${payload}`, {
//             headers: { "Authorization": `Bearer ${getToken()}` }
//         })
//         .then(response => {
//             console.log(response.data.status)
//             payloads = { data: payload, status: response.data.status }
//             action.dispatch(getProducts())
//         }).catch(function (err) {
//             console.log(err)
//             payloads = { data: "", status: err.response.status }
//         })
//     return payloads
// })
// export const searchProduct = (payload, action) => {
//     console.log(payload, action)
//     return { type: "product/searchProduct", payload }
// }

export default OrderTableSlice