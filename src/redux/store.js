import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth.js";
import { userReducer } from "./slices/user.js";
const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});

export default store;
