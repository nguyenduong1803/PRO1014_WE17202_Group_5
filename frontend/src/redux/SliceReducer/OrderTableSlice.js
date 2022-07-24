import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { getToken } from "../../utils/Common"
const api = "http://127.0.0.1:8000/api/"
const tableOrder = {
    tableId: "",
    name: "",
    phone: "",
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
        cart: []
    },
    reducers: {
        updateOrderTable: (state, action) => {
            return { ...state, orderTable: action.payload }
        },
        // addCart: (state, action) => {
        //     state.cart.find((item) => {
        //         return item.id === action.payload.id
        //     })
        //     return { ...state, cart: [...state.cart, action.payload] }
        // },

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
            }).addCase(addCart.fulfilled, (state, action) => {
                state.cart.push(action.payload)
            }).addCase(getListCart.fulfilled, (state, action) => {
                if (action.payload.status === "success") {
                    state.cart = action.payload.data
                    state.status = "idle"
                } else {
                    state.status = "idle"
                }
            }).addCase(deleteCart.fulfilled, (state, action) => {
                if (action.payload.status === true) {
                    state.cart.forEach((item, index) => {
                        if (item.id === action.payload.id) {
                            state.products.splice(index, 1)
                        }
                    })
                } else {
                    console.log(action.payload)
                }
            })

    }
})
// =========== Table ==============
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
//========== cart ================
export const addCart = createAsyncThunk("orderTable/addCart", async (payload, action) => {

    await axios
        .post(api + "cart/save",
            {
                id_product: payload.id,
                amount: payload.amount,
                id_table_book: "5"
            },
            {
                headers: { "Authorization": `Bearer ${getToken()}` },
            })
        .then(response => {
            console.log(response)
        }).catch(function (err) {
            console.log(err)
        })
    return payload
})
export const updateOrderTable = (payload, action) => {
    return { type: "orderTable/updateOrderTable", payload }
}
export const getListCart = createAsyncThunk("orderTable/getListCart", async (payload, action) => {
    let payloads
    await axios
        .get(api + "cart/getCart", {
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
export const deleteCart = createAsyncThunk("product/deleteCart", async (payload, action) => {
    let payloads
    await axios
        .delete(api + `cart/deleteOrder/12`, {
            headers: { "Authorization": `Bearer ${getToken()}` }
        })
        .then(response => {
            payloads = { data: payload, status: response.data.status }
            action.dispatch(getListCart())
        }).catch(function (err) {
            console.log(err)
            payloads = { data: "", status: err.response.status }
        })
    return payloads
})
// export const addCart = (payload, action) => {
//     return { type: "orderTable/addCart", payload }
// }

export default OrderTableSlice