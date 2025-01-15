import { createSlice } from "@reduxjs/toolkit";


const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        location: '',
        hasAC: false,
        hasKitchen: false,
        hasTV: false,
      hasBathroom: false,
      
        transmission: '',
        vehicleType: '',
    },
    reducers: {
        setLocation(state, action) {
      state.location = action.payload;
    },
    toggleAC(state) {
      state.hasAC = !state.hasAC;
    },
    toggleKitchen(state) {
      state.hasKitchen = !state.hasKitchen;
    },
    toggleTV(state) {
      state.hasTV = !state.hasTV;
    },
    toggleBathroom(state) {
      state.hasBathroom = !state.hasBathroom;
    },
    setTransmission(state, action) {
      state.transmission = action.payload;
    },
    setVehicleType(state, action) {
      state.vehicleType = action.payload;
    },
    }

})

export const {
  setLocation,
  toggleAC,
  toggleKitchen,
  toggleTV,
  toggleBathroom,
  setTransmission,
  setVehicleType,
} = filtersSlice.actions;

export default filtersSlice.reducer;