import { createSlice } from "@reduxjs/toolkit";
import { getTopCoins } from "../actions/coinActions";

const initialState = {
    coinsData: [],
    loading: false,
    error: null
}

const coinSlice = createSlice({
    name: "coin",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getTopCoins.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getTopCoins.fulfilled, (state, action) => {
            state.coinsData = action.payload;
            state.loading = false;
        })
        builder.addCase(getTopCoins.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        })
    }
})

export default coinSlice.reducer