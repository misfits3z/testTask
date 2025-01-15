import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        isLoading: false,
        error: null,
        favorite: [],
    },
    reducers: {
        addFavorite(state, action) {
            const exists = state.favorite.find(item => item.id === action.payload.id);
            if (!exists) {
                state.favorite.push(action.payload)
            } else {
                console.log("This item is already in favorites!");
            }
            
        },
    
        clearFavorites(state) {
            state.favorite = []
        }
    },

});

export default favoriteSlice.reducer;
export const { addFavorite, clearFavorites } = favoriteSlice.actions;