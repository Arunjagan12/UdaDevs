import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: [],
  products: [],
};

export const udaDevSlice = createSlice({
  name: "UdaDevs",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item._id !== action.payload
      );
    },
    markCourseCompleted: (state, action) => {
      const course = state.products.find(
        (course) => course._id === action.payload
      );
      if (course) {
        course.completed = true;
      }
    },
    resetCart: (state) => {
      state.products = [];
    },
  },
});

export const {
  addToCart,
  deleteItem,
  markCourseCompleted,
  resetCart,
} = udaDevSlice.actions;
export default udaDevSlice.reducer;
