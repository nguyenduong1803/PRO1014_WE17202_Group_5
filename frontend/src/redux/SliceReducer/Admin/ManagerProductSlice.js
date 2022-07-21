import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { getToken, removeUserSession, setTokenSession } from "../../../utils/Common"
const api = "http://127.0.0.1:8000/api/"
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
        searchText: ""
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
                console.log(action.payload)
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
                    state.products.forEach((item,index)=>{
                        if(item.id===action.payload.id){
                            state.products.splice(index, 1)
                        }
                    })
                } else {
                    console.log(action.payload)
                }
            })
    }
})
export const getProducts = createAsyncThunk("product/getProducts", async (payload, action) => {
    let payloads
    await axios
        .get(api + "product/getLists", {
            params: {
                q: "",
                sortCreateAt: payload?.sort||"desc",
                limit: payload?.limit ||10,
                page: payload?.page||1,
            }
        })
        .then(response => {
            payloads = { data: response.data.data, status: "success" }
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
export const searchProduct = (payload, action) => {
    return { type: "product/searchProduct", payload }
}

export default AuthSlice