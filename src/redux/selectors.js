import { createSelector } from "@reduxjs/toolkit";

export const selectCampers = (state) => state.campers.items;
export const selectFilter = (state) => state.filters;
export const selectLoading = (state) => state.campers.loading;
export const selectFavorite = (state) => state.favorite.favorite
export const selectCurrentPage = (state) => state.campers.currentPage;
export const selectItemsPerPage = (state) => state.campers.itemsPerPage;

export const selectAllFilters = (state) => ({
  location: state.filters.location || undefined,
  hasAC: state.filters.hasAC ? true : undefined,
  hasKitchen: state.filters.hasKitchen ? true : undefined,
  hasTV: state.filters.hasTV ? true : undefined,
  hasBathroom: state.filters.hasBathroom ? true : undefined,
  hasRadio: state.filters.hasRadio ? true : undefined,
  hasMicrowave: state.filters.hasMicrowave ? true : undefined,
  hasRefrigerator: state.filters.hasRefrigerator ? true : undefined,
  hasWater: state.filters.hasWater ? true : undefined,
  hasGas: state.filters.hasGas ? true : undefined,
  engine: state.filters.engine || undefined,
  transmission: state.filters.transmission || undefined,
  vehicleType: state.filters.vehicleType || undefined,
});
export const selectFilteredCampers = createSelector(
  [selectCampers, selectFilter],
  (campers, filters) => {
    const camperArray = campers || []; // Перевірка, чи є кемпери.
    return camperArray.filter((camper) => {
      const matchesLocation = !filters.location || camper.location.toLowerCase().includes(filters.location.toLowerCase());
      const matchesAC = !filters.hasAC || camper.hasAC === filters.hasAC;
      const matchesKitchen = !filters.hasKitchen || camper.hasKitchen === filters.hasKitchen;
      const matchesTV = !filters.hasTV || camper.hasTV === filters.hasTV;
      const matchesBathroom = !filters.hasBathroom || camper.hasBathroom === filters.hasBathroom;
      const matchesRadio = !filters.hasRadio || camper.hasRadio === filters.hasRadio;
      const matchesMicrowave = !filters.hasMicrowave || camper.hasMicrowave === filters.hasMicrowave;
      const matchesRefrigerator = !filters.hasRefrigerator || camper.hasRefrigerator === filters.hasRefrigerator;
      const matchesWater = !filters.hasWater || camper.hasWater === filters.hasWater;
      const matchesGas = !filters.hasGas || camper.hasGas === filters.hasGas;
      const matchesEngine = !filters.engine || camper.engine === filters.engine;
      const matchesTransmission = !filters.transmission || camper.transmission === filters.transmission;
      const matchesVehicleType = !filters.vehicleType || camper.vehicleType === filters.vehicleType;

      return (
        matchesLocation &&
        matchesAC &&
        matchesKitchen &&
        matchesTV &&
        matchesBathroom &&
        matchesRadio &&
        matchesMicrowave &&
        matchesRefrigerator &&
        matchesWater &&
        matchesGas &&
        matchesEngine &&
        matchesTransmission &&
        matchesVehicleType
      );
    });
  }
);