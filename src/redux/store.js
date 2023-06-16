import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth.js";
import { infoReducer } from "./slices/info.js";
const store = configureStore({
  reducer: {
    auth: authReducer,
    info: infoReducer,
  },
});

export default store;
