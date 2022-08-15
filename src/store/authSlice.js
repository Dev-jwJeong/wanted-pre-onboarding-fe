import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  login: {
    email: '',
    password: '',
  },
  register: {
    email: '',
    password: '',
  },
  auth: null,
  registerToken: null,
  registerError: null,
  authError: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeField: (state, action) => {
      state[action.payload.form][action.payload.key] = action.payload.value;
    },
    initializeForm: (state, action) => {
      Object.assign(state[action.payload], initialState[action.payload]);
    },
    registerSuccess: (state, action) => {
      state.registerToken = action.payload;
      state.registerError = null;
    },
    registerFailure: (state, action) => {
      state.registerError = action.payload;
    },
    loginSuccess: (state, action) => {
      state.auth = action.payload;
      state.authError = null;
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
  initializeForm,
} = authSlice.actions;

export default authSlice.reducer;
