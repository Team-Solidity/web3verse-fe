import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    username: "",
    address: "",
    pimg: "",
  },
  reducers: {
    addAddress: (state, action) => {
      state.address = action.payload;
    },
    addUsername: (state, action) => {
      state.username = action.payload;
    },
    addPimg: (state, action) => {
      state.pimg = action.payload;
    },
  },
});

export const { addAddress, addUsername, addPimg } = profileSlice.actions;

export default profileSlice.reducer;
