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
// register
export const selectLoadingRegister = (state) => state.AccountSlice.status
export const selectIsuccess = (state) => state.AccountSlice.mess
// product
export const selectProducts = (state) => state.ManagerProduct.products
export const selectLoadingProduct = (state) => state.ManagerProduct.status
export const selectSearchText = (state) => state.ManagerProduct.searchText
// tables
export const selectListTable = (state)=>state.OrderTableSlice.tables
export const selectOrderTable = (state)=>state.OrderTableSlice.orderTable


export const selectProductById = createSelector(selectProducts, selectSearchText,
    (product, searchText) => {
        return product.find((item)=>item.id===Number(searchText))
    })

export const remainingSelector = createSelector(selectUser, isSuccess, selectLoading,
    (user, success, loading) => {
        return success === true && loading === 'idle' ? user : {}
    })


