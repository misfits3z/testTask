import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { resetCampers } from "./campersSlice";



axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/';


export const getCampersList = createAsyncThunk(
  'campers/fetchAll',
  async (filters = {}, thunkAPI) => {
    try {
      // Очищення попереднього списку
      thunkAPI.dispatch(resetCampers());

      // Видаляємо параметри з undefined
     const params = Object.fromEntries(
        Object.entries(filters).filter(([_, value]) => value !== undefined)
      );

      const response = await axios.get('/campers', { params });
      console.log('Filtered campers List:', response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Error fetching campers'
      );
    }
  }
);

  export const getCamperDetails = createAsyncThunk(
  'campers/fetchDetails', 
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      console.log('get details ', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching camper details: ', error);
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Error fetching camper details'
      );
    }
  }
  );
 
export const bookCamper = createAsyncThunk(
  'campers/bookCamper',
  async (bookingData, thunkAPI) => {
    try {
      const response = await axios.post('/bookings', bookingData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Failed to book camper.'
      );
    }
  }
);