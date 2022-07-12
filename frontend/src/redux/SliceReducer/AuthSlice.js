import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
const api = "http://127.0.0.1:8000/api/auth/login"
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
    name: "auth",
    initialState: {
        token: "",
        status:"idle"
    },
    reducers: {
        login: (state, action) => {
            // const currentAccount = state.find(acc => acc.email === action.payload.email && acc.password === action.payload.password)
            console.log(action.payload)

        },
        registerChange: (state, action) => {
            state.push(action.payload)
        },
        updateAccount: (state, action) => {
            const currentAccount = state.find(acc => acc.id === action.payload.id)
            currentAccount = action.payload.value
        }
    },
    extraReducers: buiders =>{
        buiders.addCase(LoginAuth.pending,(state, action) => {
            state.status="loading"
        }).addCase(LoginAuth.fulfilled,(state, action) => {
            state.status="idle"
            state.token=action.payload
        })
    }
})
export const LoginAuth = createAsyncThunk("auth/login", async (action, dispatch) => {
    let token
    await axios
        .post(api, {
            email: "duongtest4@gmail.com",
            mat_khau: "12345678"
        })
        .then((response) => {
            console.log(action)
            token= response.data.token
        }).catch(function (err) {
            console.log(err)
        })
        return token
})
export default AuthSlice