import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    logged: false,
    username: "",
    userId: "",
    isAdmin: false,
  },
  reducers: {
    logged: (state, action) => {
      state.logged = true;
      state.username = action.payload.username;
      state.userId = action.payload.userId;
      state.isAdmin = action.payload.isAdmin;
    },
    logout: (state) => {
      state.logged = false;
      state.username = "";
      state.userId = "";
      state.isAdmin = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { logged, logout } = userSlice.actions;

export default userSlice.reducer;
