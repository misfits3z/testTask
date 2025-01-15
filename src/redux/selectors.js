import { createSelector } from "@reduxjs/toolkit";

export const selectCampers = (state) => state.campers.items;
export const selectFilter = (state) => state.filters.name;
export const selectLoading = (state) => state.campers.loading;

export const selectFilteredCampers = createSelector(
    [selectCampers, selectFilter],
    (campers, filters) => {
      return campers.filter((camper) => {
        const matchesLocation = !filters.location || camper.location.includes(filters.location);
        const matchesAC = !filters.hasAC || camper.hasAC === filters.hasAC;
        const matchesKitchen = !filters.hasKitchen || camper.hasKitchen === filters.hasKitchen;
        const matchesTV = !filters.hasTV || camper.hasTV === filters.hasTV;
        const matchesBathroom = !filters.hasBathroom || camper.hasBathroom === filters.hasBathroom;
        const matchesTransmission = !filters.transmission || camper.transmission === filters.transmission;
        const matchesVehicleType = !filters.vehicleType || camper.vehicleType === filters.vehicleType;
        return (
          matchesLocation && matchesAC && matchesKitchen && matchesTV && matchesBathroom && matchesTransmission && matchesVehicleType

        );
        
      });
    }
);