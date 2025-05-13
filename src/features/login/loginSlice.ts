import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

interface LoginState{
   userInfo: UserInfo,
}

type UserInfo = {
    username: string,
    password: string,
}

const loginSlice = createSlice({
    name: "loginSlice",
    initialState: {
        userInfo: {
            username: "",
            password: "",
        }
    },
    reducers: {
        setInfo: (state:LoginState,action: PayloadAction<UserInfo>)=> {
            state.userInfo.username = action.payload.username;
            state.userInfo.password = action.payload.password;
        }
    }
})

export const {setInfo} = loginSlice.actions;
export default loginSlice;