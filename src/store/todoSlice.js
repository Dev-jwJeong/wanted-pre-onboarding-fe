import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todo: null,
  todoError: null,
  deleteTodo: null,
  deleteTodoError: null,
  updateTodo: null,
  updateTodoError: null,
  createTodo: null,
  createTodoError: null,
  todoText: '',
  updateText: '',
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    changeField: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
    initializeForm: (state, action) => {
      Object.assign(state[action.payload], initialState[action.payload]);
    },
    createTodoSuccess: (state, action) => {
      state.createTodo = action.payload;
      state.createTodoError = null;
    },
    createTodoFailure: (state, action) => {
      state.createTodoError = action.payload;
    },
    getTodoSuccess: (state, action) => {
      state.todo = action.payload;
      state.todoError = null;
    },
    getTodoFailure: (state, action) => {
      state.todoError = action.payload;
    },
    deleteTodoSuccess: (state, action) => {
      state.deleteTodo = action.payload;
      state.deleteTodoError = null;
    },
    deleteTodoFailure: (state, action) => {
      state.deleteTodoError = action.payload;
    },
    updateTodoSuccess: (state, action) => {
      state.updateTodo = action.payload;
      state.updateTodoError = null;
    },
    updateTodoFailure: (state, action) => {
      state.updateTodoError = action.payload;
    },
  },
});

export const {
  changeField,
  initializeForm,
  createTodoSuccess,
  createTodoFailure,
  getTodoSuccess,
  getTodoFailure,
  deleteTodoSuccess,
  deleteTodoFailure,
  updateTodoSuccess,
  updateTodoFailure,
} = todoSlice.actions;
export default todoSlice.reducer;
