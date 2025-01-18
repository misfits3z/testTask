import { createSelector } from "@reduxjs/toolkit";

export const selectCampers = (state) => state.campers.items;
export const selectFilter = (state) => state.filters;
export const selectLoading = (state) => state.campers.loading;
export const selectFavorite = (state) => state.favorite.favorite
export const selectSelectedCamper =  (state) => state.campers.selected;
export const selectCurrentPage = (state) => state.campers.currentPage;
export const selectItemsPerPage = (state) => state.campers.itemsPerPage;

export const selectAllFilters = (state) => {
  const filters = {
    location: state.filters.location || undefined,
    AC: state.filters.hasAC ? true : undefined,
    kitchen: state.filters.hasKitchen ? true : undefined,
    TV: state.filters.hasTV ? true : undefined,
    bathroom: state.filters.hasBathroom ? true : undefined,
    radio: state.filters.hasRadio ? true : undefined,
    microwave: state.filters.hasMicrowave ? true : undefined,
    refrigerator: state.filters.hasRefrigerator ? true : undefined,
    water: state.filters.hasWater ? true : undefined,
    gas: state.filters.hasGas ? true : undefined,
    engine: state.filters.engine || undefined,
    transmission: state.filters.transmission || undefined,
    form: state.filters.form || undefined,
  };

  // Видаляємо undefined значення
  return Object.fromEntries(
    Object.entries(filters).filter(([_, value]) => value !== undefined)
  );
};

export const selectFilteredCampers = createSelector(
  [selectCampers, selectAllFilters],
  (campersData, filters) => {
    const campers = campersData?.items || [];
    if (!Array.isArray(campers) || campers.length === 0) return [];

    return campers.filter((camper) => {
      const matchesLocation =
        !filters.location ||
        camper.location?.toLowerCase().includes(filters.location.toLowerCase());
      const matchesAC = filters.hasAC === undefined || camper.hasAC === filters.hasAC;
      const matchesKitchen =
        filters.hasKitchen === undefined || camper.hasKitchen === filters.hasKitchen;
      const matchesTV = filters.hasTV === undefined || camper.hasTV === filters.hasTV;
      const matchesBathroom =
        filters.hasBathroom === undefined || camper.hasBathroom === filters.hasBathroom;
      const matchesRadio =
        filters.hasRadio === undefined || camper.hasRadio === filters.hasRadio;
      const matchesMicrowave =
        filters.hasMicrowave === undefined || camper.hasMicrowave === filters.hasMicrowave;
      const matchesRefrigerator =
        filters.hasRefrigerator === undefined ||
        camper.hasRefrigerator === filters.hasRefrigerator;
      const matchesWater =
        filters.hasWater === undefined || camper.hasWater === filters.hasWater;
      const matchesGas = filters.hasGas === undefined || camper.hasGas === filters.hasGas;
      const matchesEngine =
        !filters.engine || camper.engine?.toLowerCase() === filters.engine.toLowerCase();
      const matchesTransmission =
        !filters.transmission ||
        camper.transmission?.toLowerCase() === filters.transmission.toLowerCase();
      const matchesVehicleType =
        !filters.vehicleType ||
        camper.vehicleType?.toLowerCase() === filters.vehicleType.toLowerCase();

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
