import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { api } from "../../utils/api"
import { getToken, removeUserSession, setTokenSession } from "../../utils/Common"

const AuthSlice = createSlice({
    name: "auth",
    initialState: {
        token: "",
        status: "idle",
        user: {},
        isSuccess: getToken() ? true : false,
        listUser: [],
    },
    reducers: {
    },
    extraReducers: buiders => {
        buiders
            .addCase(LoginAuth.pending, (state) => {
                state.status = "loading"
            }).addCase(LoginAuth.fulfilled, (state) => {
                state.status = "idle"
            }).addCase(getUserAuth.fulfilled, (state, action) => {
                state.status = "idle"
                state.user = action.payload
            }).addCase(getAllUser.fulfilled, (state, action) => {
                state.status = "idle"
                state.listUser = action.payload
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
export const LoginAuth = createAsyncThunk("auth/login", async (payload, action) => {
    let token
    let status
    await axios
        .post(api + "auth/login", {
            email: payload.email,
            mat_khau: payload.password
        })
        .then(async (response) => {
            token = response.data.token
            await action.dispatch(getUserAuth(token))
        }).catch(function (err) {
            console.log(err)
            status = err.response.status
            action.dispatch(loginFailure(err.response.status))
        })
    return { token, status }
})

export const getUserAuth = createAsyncThunk("auth/getUser", async (token) => {
    let user
    await setTokenSession(token)
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
export const getAllUser = createAsyncThunk("user/getAllUser", async (payload) => {
    let user
    if (getToken() !== undefined && getToken()) {
        await axios.get(api + "user/getAllUsers",
             {
                headers: { "Authorization": `Bearer ${getToken()}` },
                params: {
                    limit: payload?.limit || 10,
                    page: payload?.page || 1,
                    q: payload?.keySearch || "",
                }
            })
            .then(res => {
                console.log(res)
                user = res.data.data
            }).catch((error) => {
                console.log(error)
            });
    }
    return user
})
const loginFailure = createAsyncThunk("auth/loginFailure", (err) => {
    return err
})
export const logOut = createAsyncThunk("auth/logout", async () => {
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