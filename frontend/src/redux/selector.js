
import { createSelector } from "@reduxjs/toolkit"

// user
export const selectUser = (state) => state.AuthSlice.user
export const selectRoleUser = (state) => state.AuthSlice.user.vai_tro
export const selectAllUser = (state) => {
    return state.AuthSlice.listUser.filter(user => user.vai_tro === 2)
}
export const selectStaff = (state) => {
    return state.AuthSlice.listUser.filter(user => user.vai_tro === 3)
}
// export const selectAllUser = (state) => state.AuthSlice.listUser
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
export const selectProductDetail = (state) => state.ManagerProduct.detailProduct
// tables
export const selectListTable = (state) => state.OrderTableSlice.tables
export const selectTable = (state) => state.OrderTableSlice.tableById
export const selectOrderTable = (state) => state.OrderTableSlice.orderTable
export const selectTableActive = (state) => {
    return state.OrderTableSlice.tables.filter((table, index) => Number(table.status) === 3)
}

// cart
export const selectCart = (state) => state.OrderTableSlice.cart

// order
export const selectOrder = (state) => state.OrderTableSlice.listOrder
export const selectOrderDetail = (state) => state.OrderTableSlice.detailOrder
export const selectProductOrder = (state) => state.OrderTableSlice.order
export const selectStatusOrder = (state) => state.OrderTableSlice.statusOrder
// category
export const selectCategory = (state) => state.CategorySlice.category
// product by id
export const selectProductById = createSelector(selectProducts, selectSearchText,
    (product, searchText) => {
        return product.find((item) => item.id === Number(searchText))
    })

// slect user
export const remainingSelector = createSelector(selectUser, isSuccess, selectLoading,
    (user, success, loading) => {
        return success === true && loading === 'idle' ? user : {}
    })

// slect user
// export const remainingUserbyOrder = createSelector(selectOrder, selectAllUser
//     (order, user) => {
//         return
//     })


