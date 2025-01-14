import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
    campers: campersReducer,
  },
})