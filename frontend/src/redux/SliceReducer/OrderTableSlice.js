import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { getToken } from "../../utils/Common"
const api = "http://127.0.0.1:8000/api/"

const OrderTableSlice = createSlice({
    name: "orderTable",
    initialState: {
        status: "idle",
        order: [],
        isSuccess: false,
        tables: []
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
            headers: { "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZjFkYjkwNzkwNTc5MTk4OWNhYzcxOWU1NjAwMDZkYmE1MWY0NWJjYzRjM2YwOWZkNDcyNzY1NDEzYjIwYjBkYTgwMjU0NDFmM2I4MjNjMzkiLCJpYXQiOjE2NTgxNjAzNTcuMjc3MzQ1LCJuYmYiOjE2NTgxNjAzNTcuMjc3MzUyLCJleHAiOjE2ODk2OTYzNTcuMTU5ODY3LCJzdWIiOiI1Iiwic2NvcGVzIjpbXX0.yDMd5P22SUEeeBZ7xS5s8NAasqxYuAvEWbhT4fk2I2ypBb4f9TlDrzKKj8hqD6WeJJH9_7ghXXQVIwlEVHzytfX-KOIyNqecC09Wze0XhSLz521e9-3wBWQ8xH3SE7uzhGHZZwkNFHjoRyh4zhKNuZRIKZRvFU5oFXz-B9X_rOdfJOtBLZhGNsdfnA8YSugZok9-d77Tu8m5jb9NuzKrYSk6us4DU32BchVMyl2xCNkkHTHkh27EAI0dFFBoc9EirEg0-GnRfKGbdf78ZikpyjzjZgh15l3GTDRHxz5LFXxg93KP0RR4-ybGU0ZQDCxe5COorqbkm01nTYzEkvTmgFjO5Die39np3oWbA9dOg021IIE5oxNoUivNdLe0cLL_1a4sB80zQ_tdd2Z2iNmGDFHhvYRavQVdaIEV92kEJCZDQ3_YPC9dYGQcpByXTaHdOJZhwDS9xEwLrNlgj5-xcmzKp8sq0kVigYsZYcWhT2-jz0tDEY1SlxidDsgSQ_b7hYOE9UsLPh4DOfV8gRnh-U3fHdQ2bRt-bHJFl74E6zzaxdbp4wCpuM_aQ95AtLNbvARE2pg4E0dJ9s7qqpWXrdirfSf-uPK7ZIbn63ycwZrtB7DmX3lY12nacJTDn0dl69siR_tc7zayyITcpnPvq-qqrfv1GnC4dpytKemJdJo` },
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