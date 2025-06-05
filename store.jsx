import {configureStore} from '@reduxjs/toolkit';
import authReducer from './authSlice';
import productReducer from './productsSlice';
import userReducer from './userSlice';
import cartReducer from './cartSlice';
import imagesReducer from './imagesSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productReducer,
        users: userReducer,
        cart: cartReducer,
        image: imagesReducer
    },
});

export default store;