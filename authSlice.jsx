// src/redux/authSlice.jsx
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await axios.post(
        'https://dummyjson.com/auth/login',
        {
          username,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Invalid username or password');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
  builder
    .addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload; 
      state.error = null;
    })
    .addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.user = null;
      state.error = action.error.message || 'Login failed';
    });
  }

});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
