import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "./../../axios.js";

export const fetchUserById = createAsyncThunk(
  "/auth/fetchUserById",
  async (id) => {
    try {
      const response = await axios.get(`/api/v1/users/${id}`);
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

const userSlice = createSlice({
  name: "user",
  initialState: {
    error: null,
    payload: null,
    loading: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.payload = action.payload;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const userReducer = userSlice.reducer;
