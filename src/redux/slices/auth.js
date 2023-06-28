import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "./../../axios.js";
export const fetchRegister = createAsyncThunk(
  "/auth/fetchRegister",
  async (formData) => {
    try {
      const response = await axios.post("/api/v1/users/signup", formData);
      return response.data;
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        throw error.response.data.message;
      } else {
        throw error;
      }
    }
  }
);
export const fetchMe = createAsyncThunk("/auth/fetchMe", async () => {
  try {
    const response = await axios.post("/api/v1/users/me");
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw error.response.data.message;
    } else {
      throw error;
    }
  }
});

export const fetchLogin = createAsyncThunk(
  "/auth/fetchLogin",
  async (formData) => {
    try {
      const response = await axios.post("/api/v1/users/login", formData);
      return response.data;
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        throw error.response.data.message;
      } else {
        throw error;
      }
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    error: null,
    payload: null,
    loading: true,
  },
  reducers: {
    //setAuthtrue
    setAuthTrue: (state, action) => {
      state.isAuth = true;
    },
    //set payaload
    setPayload: (state, action) => {
      state.payload = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.isAuth = true;
        state.error = null;
        state.payload = action.payload;
        state.loading = true;
      })
      .addCase(fetchRegister.rejected, (state, action) => {
        state.isAuth = false;
        state.error = action.error.message;
        state.payload = action.payload;
        state.loading = false;
      })
      .addCase(fetchMe.fulfilled, (state, action) => {
        state.isAuth = true;
        state.error = null;
        state.payload = action.payload;
        state.loading = true;
      })
      .addCase(fetchMe.rejected, (state, action) => {
        state.isAuth = false;
        state.error = action.error.message;
        state.payload = action.payload;
        state.loading = false;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.isAuth = true;
        state.error = null;
        state.payload = action.payload;
        state.loading = true;
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.isAuth = false;
        state.error = action.error.message;
        state.payload = action.payload;
        state.loading = false;
      });
  },
});

export const selectIsAuth = (state) => state.auth.isAuth;
export const selectError = (state) => state.auth.error;
export const selectPayload = (state) => state.auth.payload;
export const selectLoading = (state) => state.auth.loading;

//.export setAuthTrue
export const { setAuthTrue } = authSlice.actions;
export const { setPayload } = authSlice.actions;
export const authReducer = authSlice.reducer;
