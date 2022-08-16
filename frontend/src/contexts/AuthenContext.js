import { createContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  selectUser } from "../redux/selector";
import { getProducts } from "../redux/SliceReducer/ManagerProductSlice";
import { getUserAuth } from "../redux/SliceReducer/AuthSlice";
import {  getListCart, getListTable, getOrder } from "../redux/SliceReducer/OrderTableSlice";
import { getToken } from "../utils/Common";
import { getCategory } from "../redux/SliceReducer/CategorySlice";
const AuthContext = createContext("");

function AuthenProvider({ children }) {
    const dispatch = useDispatch()
    // const remainingSelector = useSelector(remainingSelector)
    const remaining = useSelector(selectUser)
    useEffect(() => {
        if (getToken()) {
            dispatch(getUserAuth(getToken()))
            dispatch(getListCart())
           
        }
        dispatch(getListTable())
        dispatch(getProducts())
        dispatch(getCategory())

    }, [])
    return (
        <AuthContext.Provider value={remaining}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthenProvider, AuthContext }