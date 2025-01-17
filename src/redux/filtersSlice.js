import { createSlice } from "@reduxjs/toolkit";


const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        location: '',
        hasAC: false,
        hasKitchen: false,
        hasTV: false,
        hasBathroom: false,
        hasRadio: false,
        hasMicrowave: false,
        hasRefrigerator: false,
        hasWater: false,
        hasGas: false,
        engine: '',
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
    toggleRadio(state) {
      state.hasRadio = !state.hasRadio;
      },
    toggleMicrowave(state) {
      state.hasMicrowave = !state.hasMicrowave;
      },
    toggleRefrigerator(state) {
      state.hasRefrigerator = !state.hasRefrigerator;
      },
    toggleWater(state) {
      state.hasWater = !state.hasWater;
      },
    toggleGas(state) {
      state.hasGas = !state.hasGas;
      },
    setEngine(state, action) {
      state.engine = action.payload;
      },
    setTransmission(state, action) {
      state.transmission = action.payload;
    },
    setVehicleType(state, action) {
      state.vehicleType = action.payload;
      },
    resetFilters(state) {
      Object.keys(state).forEach((key) => {
        if (typeof state[key] === 'boolean') {
          state[key] = false; 
        } else {
          state[key] = ''; 
        }
   });
    },
  },
});

export const {
  setLocation,
  toggleAC,
  toggleKitchen,
  toggleTV,
  toggleBathroom,
  toggleRadio,
  toggleMicrowave,
  toggleRefrigerator,
  toggleWater,
  toggleGas,
  setEngine,
  setTransmission,
  setVehicleType,
  resetFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;