import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { api } from "../../utils/api"
import { getToken } from "../../utils/Common"
// initState: {
//     username: "",
//     password: "",
//     address: "",
//     phone: "",
//     dob: "",
//     gender: "",
//     roles: "",
//     email: "",
// },

const AuthSlice = createSlice({
    name: "product",
    initialState: {
        status: "idle",
        products: [],
        isSuccess: false,
        searchText: "",
        detailProduct:{}
    },
    reducers: {
        searchProduct: (state, action) => {
            state.searchText = action.payload
            return state
        },
    },
    extraReducers: buiders => {
        buiders
            .addCase(getProducts.pending, (state) => {
                state.status = "loading"
            }).addCase(getProducts.fulfilled, (state, action) => {
                if (action.payload.status === "success") {
                    state.products = action.payload.data
                    state.isSuccess = true
                    state.status = "idle"
                } else {
                    state.isSuccess = false
                    state.status = "idle"
                }
            }).addCase(deleteProductById.fulfilled, (state, action) => {
                if (action.payload.status === true) {
                    state.products.forEach((item, index) => {
                        if (item.id === action.payload.id) {
                            state.products.splice(index, 1)
                        }
                    })
                } else {
                    console.log(action.payload)
                }
            }).addCase(addProduct.fulfilled,(state, action)=>{
                state.products.push(action.payload)
            }).addCase(getDetailProduct.fulfilled,(state, action)=>{
                if(action.payload.status==="success"){
                    state.detailProduct = action.payload.data
                }
            })
    }
})
export const getProducts = createAsyncThunk("product/getProducts", async (payload, action) => {
    let payloads
    await axios
        .get(api + "product/getLists", {
            params: {
                q: payload?.keySearch||"",
                sortCreateAt: payload?.sort || "desc",
                limit: payload?.limit || 10,
                page: payload?.page || 1,
                id_directory:payload?.category,
                priceFrom:payload?.from ||0,
                priceTo:payload?.to || 2000000,
            }
        })
        .then(response => {
            payloads = { data: response.data, status: "success" }
        }).catch(function (err) {
            console.log(err)
            payloads = { data: "", status: err.response.status }
        })
    return payloads
})
export const deleteProductById = createAsyncThunk("product/deleteProductById", async (payload, action) => {
    let payloads
    await axios
        .delete(api + `product/delete/${payload}`, {
            headers: { "Authorization": `Bearer ${getToken()}` }
        })
        .then(response => {
            payloads = { data: payload, status: response.data.status }
            action.dispatch(getProducts())
        }).catch(function (err) {
            console.log(err)
            payloads = { data: "", status: err.response.status }
        })
    return payloads
})
export const addProduct = createAsyncThunk("product/addProduct", async (payload, action) => {
    let payloads
    await axios
        .post(api + `product/create`, payload, {
            headers: {
                "Authorization": `Bearer ${getToken()}`
            },
        })
        .then(response => {
            payloads = { data: payload, status: response.data.status }
            console.log(response)
            action.dispatch(getProducts())
        }).catch(function (err) {
            console.log(err)
            payloads = { data: "", status: err.response.status }
        })
    return payloads
})
export const updateProduct = createAsyncThunk("product/updateProduct", async (payload, action) => {
    let payloads
    await axios
        .post(api + `product/update/${payload.id}`, payload.formData, {
            headers: {
                "Authorization": `Bearer ${getToken()}`
            },
        })
        .then(response => {
            payloads = { data: payload, status: response.data.status }
            console.log(response)
            action.dispatch(getProducts())
        }).catch(function (err) {
            console.log(err)
            payloads = { data: "", status: err.response.status }
        })
    return payloads
})
export const getDetailProduct = createAsyncThunk("product/getDetailProduct", async (payload, action) => {
    let payloads
    await axios
        .get(api + `product/detail/${payload}`, {
        })
        .then(response => {
            payloads = { data: response.data.data, status: "success" }
        }).catch(function (err) {
            console.log(err)
            payloads = { data: "", status: err.response.status }
        })
    return payloads
})

export const searchProduct = (payload) => {
    return { type: "product/searchProduct", payload }
}
export default AuthSlice