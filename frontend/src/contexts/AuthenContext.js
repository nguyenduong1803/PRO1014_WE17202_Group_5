import { createContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, remainingSelector, selectLoadingProduct, selectProducts, selectLoading } from "../redux/selector";
import { getProducts } from "../redux/SliceReducer/Admin/ManagerProductSlice";
import { getUserAuth } from "../redux/SliceReducer/AuthSlice";
import { getListTable } from "../redux/SliceReducer/OrderTableSlice";
import { getToken } from "../utils/Common";
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
    }, [])
    return (
        <AuthContext.Provider value={remaining}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthenProvider, AuthContext }