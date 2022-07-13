import axios from 'axios';
import { createSelector } from "@reduxjs/toolkit"
import setAuthToken from '../utils/setAuthToken';
import { getToken } from '../utils/Common';
// export const selectAuth =  (state) => {
//     let user={};
//     if(state.AuthSlice.isSuccess){
//         axios.get("http://127.0.0.1:8000/api/auth/getInfoUser",
//         { headers: { "Authorization": `Bearer ${getToken()}` } })
//         .then(res => {
//             user = res.data
//         }).catch((error) => {
//             console.log(error)
//         });
//     }
//     return { ...user }

// }
export const selectUser = (state) => state.AuthSlice.user
export const isSuccess = (state) => state.AuthSlice.isSuccess
export const token = (state) => state.AuthSlice.token

export const selectLoading = (state) => state.AuthSlice.status

export const remainingSelector = createSelector(selectUser, isSuccess, selectLoading,
    (user, success, selectLoading) => {
        console.log(user,success)
        return success===true ? user :{}
    })


