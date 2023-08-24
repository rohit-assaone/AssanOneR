import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../services/helper";
const initialState = {
  success: false,
  loading: false,
  error: null,
};


export const postDetailsOfCustomer = createAsyncThunk(
    "postDOC/customerDetails",
    async (data) => {
      console.log(2);
      const options = {
        method: "POST",
        url: `${BASE_URL}/api/customer_details`,
        headers: {
          "content-type": "application/json",
        },
        data: data,
      };
      try {
        const response = await axios.request(options);
        console.log(1);
        console.log(response);
        return response.data;
      } catch (error) {
        console.error(error);
      }
    }
  );

const detailsOfCustomerSlice = createSlice({
  name: "customerDetails",
  initialState,

  reducers: {},
  extraReducers:   {
      [postDetailsOfCustomer.pending]: (state, action) => {
        state.loading = true;
      },
      [postDetailsOfCustomer.fulfilled]: (state) => {
          state.success = true;
      },
      [postDetailsOfCustomer.rejected]: (state, {payload: {error, msg}}) => {
          state.loading = false;
          if(error) {
              state.error = error
          }else state.msg = msg
      },
  }
});



export default detailsOfCustomerSlice.reducer;
