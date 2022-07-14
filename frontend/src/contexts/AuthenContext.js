import { createContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser ,remainingSelector} from "../redux/selector";
import { getUserAuth } from "../redux/SliceReducer/AuthSlice";
import { getToken } from "../utils/Common";
const AuthContext = createContext("");

function AuthenProvider({ children }) {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    // const remainingSelector = useSelector(remainingSelector)
    const remaining = useSelector(remainingSelector)
    console.log(remaining, user)
    useEffect(() => {
        if (getToken() !== undefined) {
            dispatch(getUserAuth())
        }
    }, [])
    return (
        <AuthContext.Provider value={remaining}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthenProvider, AuthContext }