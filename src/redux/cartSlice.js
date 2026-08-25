import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',

  initialState: {
    cartItems: [],
  },

  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      const existingItem = state.cartItems.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({
          ...product,
          quantity: 1,
        });
      }
    },

    removeFromCart: (state, action) => {
      const productId = action.payload;

      state.cartItems = state.cartItems.filter((item) => item.id !== productId);
    },

    increaseQuantity: (state, action) => {
      const productId = action.payload;

      const item = state.cartItems.find((item) => item.id === productId);

      if (item) {
        item.quantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const productId = action.payload;

      const item = state.cartItems.find((item) => item.id === productId);

      if (!item) return;

      if (item.quantity > 1) {
        item.quantity -= 1;
        return;
      }

      state.cartItems = state.cartItems.filter((item) => item.id !== productId);
    },

    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
