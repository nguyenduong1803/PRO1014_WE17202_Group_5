import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
const api = "http://127.0.0.1:8000/api/"
const AccountSlice = createSlice({
    name: "register",
    initialState: {
        account: [],
        status: "idle",
        isSuccess: false
    },
    reducers: {
       
    },
    extraReducers: buiders => {
        buiders
            .addCase(registerAccounts.pending, (state) => {
                state.status = "loading"
            })
            .addCase(registerAccounts.fulfilled, (state) => {
                state.token = "register"
            })
    }
})
export const registerAccounts = createAsyncThunk("auth/registerAccounts", async (payload, action) => {
    await axios.post(api + "api/auth/register", payload, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    }).then((response) => {
        console.log(response)
    }).catch((error) => {
        console.log(error)
    })
})
export const forgotPasswords = createAsyncThunk("auth/forgotPasswords", async (payload, action) => {
    await axios.post(api + "api/auth/register", payload, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    }).then((response) => {
        console.log(response)
    }).catch((error) => {
        console.log(error)
    })
})

export default AccountSlice
