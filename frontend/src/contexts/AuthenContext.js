import { createContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, remainingSelector, selectLoadingProduct, selectProducts, selectLoading } from "../redux/selector";
import { getProducts } from "../redux/SliceReducer/ManagerProductSlice";
import { getUserAuth } from "../redux/SliceReducer/AuthSlice";
import { getListCart, getListTable, getOrder } from "../redux/SliceReducer/OrderTableSlice";
import { getToken } from "../utils/Common";
import { getCategory } from "../redux/SliceReducer/CategorySlice";
const AuthContext = createContext("");

function AuthenProvider({ children }) {
    const dispatch = useDispatch()
    // const user = useSelector(selectUser)
    // const remainingSelector = useSelector(remainingSelector)
    const remaining = useSelector(selectUser)
    useEffect(() => {
        if (getToken()) {
            dispatch(getUserAuth(getToken()))
        }
        dispatch(getListTable())
        dispatch(getProducts())
        dispatch(getListCart())
        dispatch(getOrder())
        dispatch(getCategory())
    }, [])
    return (
        <AuthContext.Provider value={remaining}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthenProvider, AuthContext }