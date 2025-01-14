import { createSelector } from "@reduxjs/toolkit";


export const selectCampers = (state) => state.campers.items;
// export const selectItems = (state) => state.contacts.items;
export const selectFilter = (state) => state.filters.name;

export const selectFilteredCampers = createSelector(
    [selectItems, selectFilter],
    (contacts, filter) => {
      if (filter) {
        return contacts.filter((contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
      } else return contacts;
    }
);