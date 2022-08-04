import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { getToken } from "../../utils/Common"

const api = "http://127.0.0.1:8000/api/"
const tableOrder = {
    tableId: [],
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
        listOrder: {},
        isSuccess: false,
        orderTable: tableOrder,
        cart: [],
        tables: [],
        detailOrder: []
    },
    reducers: {
        updateOrderTable: (state, action) => {
            return { ...state, orderTable: action.payload }
        },
        addOrder: (state, action) => {
            const product = state.order.find(item => item.id === action.payload.id);
            
            if (product) {
                product.quantity = product.quantity + 1
            } else {
                return { ...state, order: [...state.order, action.payload] }
            }
            return state
        },
        addQuantityOrder: (state, action) => {
            const product = state.order.find(item => item.id === action.payload.id)
            product.quantity = action.payload.quantity
            return state
        }
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
            }).addCase(createOrderTable.fulfilled, (state, action) => {
                state.orderTable=action.payload
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
            }).addCase(getOrder.fulfilled, (state, action) => {
                state.status = "idle"
                state.listOrder = action.payload.data
                console.log(action.payload)
            })
            .addCase(getDetailOrder.fulfilled, (state, action) => {
                state.status = "idle"
                state.detailOrder = action.payload.data
                console.log(action.payload)
            })

            .addCase(createOrder.fulfilled, (state, action) => {

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
export const createOrderTable = createAsyncThunk("orderTable/createOrderTable", async (payload, action) => {
    let payloads
    console.log(payload.tableId[0][0].join(""))

    const test = [1,2,3]
    const test1 = ['a', 'b', 'c']

    await axios
        .post(api + "tableBook/create",
            {
                // name_user: payload.name,
                // id_table: payload.tableId[0].join(""),
                // status_book: 2,
                // phone: payload.phone,
                // total_user: payload.countGuest,
                // time_book: payload.celendar,
                // description: "mô tả"
                table : test,
                user : test1
            },
            {
                headers: { "Authorization": `Bearer ${getToken()}` },
            })
        .then(response => {
            console.log(response)
            payloads = { data: response.data.data, status: "success" }
            action.dispatch(createOrder())
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
            action.dispatch(getListCart())
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
    console.log(payloads)
    return payloads
})

export const deleteCart = createAsyncThunk("product/deleteCart", async (payload, action) => {
    let payloads
    await axios
        .delete(api + `cart/deleteOrder/${payload}`, {
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

// ============ order ================
export const addOrder = (payload) => {

    return { type: "orderTable/addOrder", payload }
}
export const addQuantityOrder = (payload) => {
    return { type: "orderTable/addQuantityOrder", payload }
}
export const createOrder = createAsyncThunk("orderTable/createOrder", async (payload, action) => {
    let payloads
    await axios
        .post(api + "invoices/create",
        {
            list_id_product: [
                4,
                5,
                4
            ],
            list_amount: [
                2,
                3,
                4
            ],
            list_table_book: [
                4,
                4,
                null
            ],
            user_name_book: "duong",
            time_book: "",
            phone: "0982996764",
            note: "test"
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
export const getOrder = createAsyncThunk("orderTable/getOrder", async () => {
    let payloads
    await axios
        .get(api + "invoices/getInvoice", {
            headers: { "Authorization": `Bearer ${getToken()}` },
        })
        .then(response => {
            console.log(response.data.data)
            payloads = { data: response.data.data, status: "success" }
        }).catch(function (err) {
            payloads = { data: "", status: err.response.status }
        })
    console.log(payloads)
    return payloads
})
export const getDetailOrder = createAsyncThunk("orderTable/getDetailOrder", async () => {
    let payloads
    await axios
        .get(api + "invoice-detail/getInvoiceDetail", {
            headers: { "Authorization": `Bearer ${getToken()}` },
        })
        .then(response => {
            console.log(response.data.data)
            payloads = { data: response.data.data, status: "success" }
        }).catch(function (err) {
            payloads = { data: "", status: err.response.status }
        })
    console.log(payloads)
    return payloads
})
// export const addCart = (payload, action) => {
//     return { type: "orderTable/addCart", payload }
// }

export default OrderTableSlice