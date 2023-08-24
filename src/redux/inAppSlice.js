import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    sideBar : true,
}

const inAppSlice = createSlice({
    name: "inApp",
    initialState,
  
    reducers: {
        setSidebar: (state) => {
            state.sideBar = !state.sideBar;
        }
    },
   
  });
  
  export const { setSidebar} = inAppSlice.actions

  
  export default inAppSlice.reducer;