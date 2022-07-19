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
    },
    reducers: {
    },
    extraReducers: buiders => {
        buiders
            .addCase(getProducts.pending, (state) => {
                state.status = "loading"
            }).addCase(getProducts.fulfilled, (state) => {
                state.status = "idle"
            }).addCase(getUserAuth.fulfilled, (state, action) => {
                state.status = "idle"
                state.user = action.payload
            }).addCase(loginSuccess.fulfilled, (state, action) => {
                state.status = "idle"
                state.isSuccess = true
                state.user = action.payload.user
                state.token = action.payload.token
            }).addCase(loginFailure.fulfilled, (state, action) => {
                state.status = "idle"
                state.isSuccess = action.payload
            }).addCase(logOut.pending, (state) => {
                state.status = "loading"
            }).addCase(logOut.fulfilled, (state) => {
                state.status = "idle"
                state.token = ""
                state.isSuccess = false
                state.user = {}
            })
    }
})
export const getProducts = createAsyncThunk("product/getProducts", async (payload, action) => {
    let token
    let status
    console.log(payload, action)
    await axios
        .get(api + "getLists?q=&sortCreateAt=desc&limit=10&page=1", {
            params: {
                q: payload.keySearch,
                limit: payload.limit,
                page: payload.pageIndex
            }
        })
        .then(async (response) => {
            token = response.data.token
            await action.dispatch(loginSuccess(token))
            await action.dispatch(getUserAuth())
        }).catch(function (err) {
            console.log(err)
            status = err.response.status
            action.dispatch(loginFailure(err.response.status))
        })
    return { token, status }
})

export const getUserAuth = createAsyncThunk("auth/getUser", async () => {
    let user
    if (getToken() !== undefined && getToken()) {
        await axios.get(api + "auth/getInfoUser",
            { headers: { "Authorization": `Bearer ${getToken()}` } })
            .then(res => {
                user = res.data.user
            }).catch((error) => {
                console.log(error)
            });
    }
    return user
})
const loginSuccess = createAsyncThunk("auth/loginSuccess", async (token) => {
    let user;
    await setTokenSession(token)
    await axios.get(api + "auth/getInfoUser",
        { headers: { "Authorization": `Bearer ${getToken()}` } })
        .then(res => {
            user = res.data.user
        }).catch((error) => {
            console.log(error)
        });
    return user;
})
const loginFailure = createAsyncThunk("auth/loginFailure", (err) => {
    return err
})
export const logOut = createAsyncThunk("auth/logout", async (payload, action) => {
    console.log(getToken())
    await axios.get(api + "auth/logout",
        { headers: { "Authorization": `Bearer ${getToken()}` } })
        .then(res => {
            console.log(res)
        }).catch((error) => {
            console.log(error)
        });
    await removeUserSession()
})

export default AuthSlice