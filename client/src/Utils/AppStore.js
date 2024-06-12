import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import searchReducer from "./searchSlice";
import videoReducer from "./videoSlice";
const Store = configureStore({
  reducer: {
    app: appReducer,
    search: searchReducer,
    video: videoReducer,
  },
});

export default Store;
