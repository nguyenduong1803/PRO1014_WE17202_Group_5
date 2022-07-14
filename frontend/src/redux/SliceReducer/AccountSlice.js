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
        registerAccount: (state, action) => {
            return state
        },
        registerSuccess: (state, action) => {
            return state
        },
        registerFailure: (state, action) => {
            return state
        },
        updateAccount: (state, action) => {
            return state
        },
        updateAccountSuccess: (state, action) => {
            return state
        },
        updateAccountFailure: (state, action) => {
            return state
        },
    },
    extraReducers: buiders => {
        buiders
            .addCase(registerAccount.pending, (state) => {
                state.status = "loading"
            })
            .addCase(registerAccount.fulfilled, (state) => {
                state.token = "register"
            })
    }
})
export const registerAccount = createAsyncThunk("auth/registerAccount", async (payload, action) => {
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
