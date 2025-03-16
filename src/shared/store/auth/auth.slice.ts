import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: "auth",
  initialState: false,
  reducers: {
    login(state) {
      return true;
    },
    logout(state) {
      return false;
    }
  }
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
