import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios.js";

const infoSlice = createSlice({
  name: "auth",
  initialState: {
    id: null,
  },
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { setId } = infoSlice.actions;
export const selectId = (state) => state.info.id;
export const infoReducer = infoSlice.reducer;
