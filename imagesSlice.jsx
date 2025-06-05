import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchImages = createAsyncThunk('images/fetch', async () => {
  const res = await axios.get('https://dummyjson.com/products');
  return res.data.products.map(p => ({ id: p.id, images: p.images }));
});

const imageSlice = createSlice({
  name: 'images',
  initialState: {
    gallery: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.loading = false;
        state.gallery = action.payload;
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default imageSlice.reducer;
