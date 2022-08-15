import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  password: '',
  auth: null,
  authError: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeField: (state, action) => {
      state.payload.key = action.payload.value;
    },
    registerSuccess: (state, action) => {
      state.auth = action.payload;
    },
    registerFailure: (state, action) => {
      state.authError = action.payload;
    },
    loginSuccess: (state, action) => {
      state.auth = action.payload;
    },
    loginFailure: (state, action) => {
      state.authError = action.payload;
    },
  },
});

export const {
  changeField,
  registerSuccess,
  registerFailure,
  loginSuccess,
  loginFailure,
} = authSlice.actions;

export default authSlice.reducer;
