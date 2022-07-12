import axios from 'axios';
import { createSelector } from "@reduxjs/toolkit"
import setAuthToken from '../utils/setAuthToken';
export const selectAuth = async (state) => {
    let user;
  console.log(setAuthToken(state.AuthSlice.token))  
   return  await axios.get("http://127.0.0.1:8000/api/auth/getInfoUser",
        { headers: { "Authorization": `Bearer ${state.AuthSlice.token}` } })
        .then(res => {
            user = res.data
            console.log(user)
            return user
        }).catch((error) => {
            console.log(error)
        });
}


