import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { getToken, setTokenSession } from "../../utils/Common"
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
    name: "auth",
    initialState: {
        token: "",
        status: "idle",
        user: {},
        isSuccess: getToken() ? true : false
    },
    reducers: {
        login: (state, action) => {
            return state
        },
        loginSuccess: (state, action) => {

        },
        loginFailure: (state, action) => {

        },
        getUser: (state, action) => {
            return state
        }
    },
    extraReducers: buiders => {
        buiders
            .addCase(LoginAuth.pending, (state, action) => {
                state.status = "loading"
            }).addCase(LoginAuth.fulfilled, (state, action) => {
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
            })
    }
})
export const LoginAuth = createAsyncThunk("auth/login", async (payload, action) => {
    let token
    let status
    console.log(payload, action)
    await axios
        .post(api + "auth/login", {
            email: payload.email,
            mat_khau: payload.password
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
    console.log(token)
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
export default AuthSlice