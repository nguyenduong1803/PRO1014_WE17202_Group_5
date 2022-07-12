import { createSlice } from "@reduxjs/toolkit"
const AuthSlice = createSlice({
    name: "auth",
    initState: {
        username: "",
        password: "",
        address: "",
        phone: "",
        dob: "",
        gender: "",
        roles: "",
        email: "",
    },
    reducers: {
        loginChange: (state, action) => {
            state.email = action.payload.email,
                state.password = action.payload.password
        },
        registerChange: (state, action) => {
            state.push(action.payload)
        },
        updateAccount: (state, action) => {
            state.push(action.payload)

        }
    }
})
export default AuthSlice