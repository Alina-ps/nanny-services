import { createAsyncThunk } from '@reduxjs/toolkit';
import { database } from '../../config/firebase.js';
import { get, ref } from 'firebase/database';

export const fetchAllNannies = createAsyncThunk(
  'nannies/fetchAll',
  async (_, thunkAPI) => {
    const dbRef = ref(database, 'nannies');

    try {
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        const nannies = snapshot.val();
        return Object.entries(nannies).map(([id, data]) => ({
          id,
          ...data,
        }));
      } else {
        throw new Error('No nannies data available');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
