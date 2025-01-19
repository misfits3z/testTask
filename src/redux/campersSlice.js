import { createSlice} from "@reduxjs/toolkit";
import { getCamperDetails, getCampersList } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const campersSlice = createSlice({
    name: "campers",
    initialState: {
        items: [],
        bookings: [],
        isLoading: false,
        error: null,
        selected: [],
        currentPage: 1,
        itemsPerPage: 4,
    },
    reducers: {
        resetCampers(state) {
            state.items = [];
            state.currentPage = 1
        },
        loadMorePage(state) {
            state.currentPage += 1;
        }
    },
    extraReducers: (builder) => {
        builder
            // Обробка getCamperList
            .addCase(getCampersList.pending, handlePending)
            .addCase(getCampersList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(getCampersList.rejected, handleRejected)
            //  обробка getCamperDetails
             .addCase(getCamperDetails.pending, handlePending)
             .addCase(getCamperDetails.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.selected = action.payload;
            })
            .addCase(getCamperDetails.rejected, handleRejected)
        
    },
});

export default campersSlice.reducer;
export const { resetCampers, loadMorePage } = campersSlice.actions;