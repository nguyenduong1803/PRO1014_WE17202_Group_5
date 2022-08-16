import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { api } from "../../utils/api"
import { getToken } from "../../utils/Common"
const StatictialSlice = createSlice({
    name: "statictial",
    initialState: {
        orderProduct: [],
        status: "idle",
    },
    reducers: {

    },
    extraReducers: buiders => {
        buiders
            .addCase(productOrder.pending, (state) => {
                state.status = "loading"
            })
            .addCase(productOrder.fulfilled, (state, payload) => {
                console.log("ful");
                state.status = "idle"
                state.orderProduct = payload.data
            })
    }
})

export const productOrder = createAsyncThunk("statictial/productOrder", async () => {
    let payloads
    await axios
        .get(api + `statistical/statisticalByProduct`, {
            headers: {
                "Authorization": `Bearer ${getToken()}`
            },
        })
        .then(response => {
            console.log(response.data.data);
            payloads = { data: response.data.data, status: true }
        }).catch(function (err) {
            console.log(err)
            payloads = { data: "", status: err.response.status }
        })
    return payloads
})


export default StatictialSlice
