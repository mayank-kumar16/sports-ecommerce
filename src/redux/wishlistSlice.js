import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    wishlistItems: [],
  },
  reducers: {
    addToWishlist: (state, action) => {
      const product = action.payload;

      const existingItem = state.wishlistItems.find((item) => {
        return item.id === product.id;
      });

      if (existingItem) {
        return;
      } else {
        state.wishlistItems.push(product);
      }
    },
    removeFromWishlist: (state, action) => {
      const prodID = action.payload;

      state.wishlistItems = state.wishlistItems.filter((item) => {
        return item.id !== prodID;
      });
    },
    clearWishlist: (state) => {
      state.wishlistItems = [];
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
