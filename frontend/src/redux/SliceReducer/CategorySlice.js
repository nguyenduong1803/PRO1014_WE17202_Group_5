import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { getToken } from "../../utils/Common"
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

const CategorySlice = createSlice({
    name: "category",
    initialState: {
        status: "idle",
        category: [],
    },
    reducers: {

    },
    extraReducers: buiders => {
        buiders
            .addCase(getCategory.pending, (state) => {
                state.status = "loading"
            }).addCase(getCategory.fulfilled, (state, action) => {
                if (action.payload.status === "success") {
                    state.category = action.payload.data
                    state.isSuccess = true
                    state.status = "idle"
                } else {
                    state.isSuccess = false
                    state.status = "idle"
                }
            }).addCase(deleteCategoryById.pending, (state) => {
                state.status = "loading"
            })
            .addCase(deleteCategoryById.fulfilled, (state, action) => {
                state.status = "idle"
                if (action.payload.status === true) {
                    state.category.forEach((item, index) => {
                        if (item.id === action.payload.id) {
                            state.products.splice(index, 1)
                        }
                    })
                } else {
                    console.log(action.payload)
                }
            }).addCase(updateCategory.fulfilled, (state, action) => {

            })
    }
})
export const getCategory = createAsyncThunk("category/getCategory", async (payload, action) => {
    let payloads
    await axios
        .get(api + "directory/getLists")
        .then(response => {
            payloads = { data: response.data.data, status: "success" }
        }).catch(function (err) {
            payloads = { data: "", status: err.response.status }
        })
    return payloads
})
export const deleteCategoryById = createAsyncThunk("category/deleteCategoryById", async (payload, action) => {
    let payloads
    console.log(payload)
    await axios
        .delete(api + `directory/delete/${payload}`,
            {
                headers: { "Authorization": `Bearer ${getToken()}` }
            })
        .then(response => {
            payloads = { data: payload, status: response.data.status }
            action.dispatch(getCategory())
        }).catch(function (err) {
            console.log(err)
            payloads = { data: "", status: err.response.status }
        })
    return payloads
})
export const addCategorys = createAsyncThunk("category/addCategorys", async (payload, action) => {
    await axios
        .post(api + "directory/create",
            {
                name: payload
            },
            {
                headers: { "Authorization": `Bearer ${getToken()}` },
            })
        .then(response => {
            action.dispatch(getCategory())
        }).catch(function (err) {
        })
    return payload
})
export const updateCategory = createAsyncThunk("category/updateCategory", async (payload, action) => {
    await axios
        .post(api + "directory/update",
            {
                name: payload.name,
                id: payload.id
            },
            {
                headers: { "Authorization": `Bearer ${getToken()}` },
            })
        .then(response => {
            action.dispatch(getCategory())
        }).catch(function (err) {
        })
    return payload
})

export default CategorySlice