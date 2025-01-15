import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { resetCampers } from "./campersSlice";



axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/';

// export const getCampersList = async () => {
//     try {
//         const response = await axios.get('/campers');
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching campers:', error);
//     throw error;
//     }  
// }

// export const getCamperDetails = async (id) => {
//   try {
//     const response = await axios.get(`/campers/${id}`);
//     console.log('get details ', response.data)
//     return response.data;
    
//   } catch (error) {
//     console.error('Error fetching campers details:', error);
//     throw error;
//   }
// };


export const getCampersList = createAsyncThunk(
  'campers/fetchAll',
  async (_, thunkAPI) => {
    try {
        // Очищення попереднього списку
      thunkAPI.dispatch(resetCampers());
      const response = await axios.get('/campers');
      console.log('Campers List:', response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data.message || 'Error fetching contacts');
    }  
})

export const getCamperDetails = createAsyncThunk(
  'campers/fetchDetails', 
  async (id, thunkAPI) => {
  try {
    const response = await axios.get(`/campers/${id}`);
    console.log('get details ', response.data)
    return response.data;
    
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data.message ||'Error fetching campers details:');
    
  }
})