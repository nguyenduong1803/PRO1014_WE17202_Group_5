import { createContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, remainingSelector, selectLoadingProduct, selectProducts, selectLoading } from "../redux/selector";
import { getProducts } from "../redux/SliceReducer/Admin/ManagerProductSlice";
import { getUserAuth } from "../redux/SliceReducer/AuthSlice";
import { getToken } from "../utils/Common";
const AuthContext = createContext("");

function AuthenProvider({ children }) {
    const load = useSelector(selectLoading)
    const listProduct = useSelector(selectProducts)
    const loadingProduct = useSelector(selectLoadingProduct)
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    // const remainingSelector = useSelector(remainingSelector)
    const remaining = useSelector(remainingSelector)
    useEffect(() => {
        if (getToken() !== undefined && getToken()) {
            dispatch(getUserAuth())
        }
        dispatch(getProducts())
    }, [selectProducts])
    return (
        <AuthContext.Provider value={remaining}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthenProvider, AuthContext }