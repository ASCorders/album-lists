import { configureStore } from "@reduxjs/toolkit";
import albumSlice from "./store-slice/albumSlice";
export default configureStore({
  reducer: {
    albumSlice,
  },
});
