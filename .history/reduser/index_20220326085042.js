import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 
 email: 'bob@tut.by',
 name: 'bob',
  walletAddress: "",
  balance: 0,
  token: "",
  tokenId: 0,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    increment: (state) => {
      state.value = true;
    },
    
    addAccount: (state, action) => {
      state.walletAddress = action.payload;
    },
    changeBalance: (state, action) => {
      state.balance = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setTokenId: (state, action) => {
      state.tokenId = action.payload;
    },
  },
});