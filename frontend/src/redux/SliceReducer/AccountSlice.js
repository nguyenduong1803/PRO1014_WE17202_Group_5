import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
const api = "http://127.0.0.1:8000/api/"
const AccountSlice = createSlice({
    name: "register",
    initialState: {
        account: {},
        status: "idle",
        isSuccess: false,
        mess: {}
    },
    reducers: {

    },
    extraReducers: buiders => {
        buiders
            .addCase(registerAccounts.pending, (state) => {
                state.status = "loading"
            })
            .addCase(registerAccounts.fulfilled, (state) => {
                state.status = "idle"

            }).addCase(isRegisterSuccess.fulfilled, (state, action) => {
                state.mess = action.payload
            }).addCase(forgotPasswords.fulfilled, (state, action) => {
                state.mess = action.payload
            })
    }
})
export const isRegisterSuccess = createAsyncThunk("register/isRegisterSuccess", (payload, action) => {
    return payload
})
export const registerAccounts = createAsyncThunk("register/registerAccounts", async (payload, action) => {
    await axios.post(api + "auth/register", payload, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    }).then((response) => {
        action.dispatch(isRegisterSuccess(response.data.msg))
    }).catch((error) => {
        console.log(error)
        action.dispatch(isRegisterSuccess(error.response.data[0]))

    })

})

export const forgotPasswords = createAsyncThunk("register/forgotPasswords", async (payload, action) => {
    await axios
        .post(api + "user/sendMailForgotPassword", {
            email: payload, // This is the body part
        })
        .then((response) => {

        }).catch(function (err) {
            console.log(err)

        })

})

export default AccountSlice
