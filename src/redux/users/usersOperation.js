import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://647cd046c0bae2880ad138bb.mockapi.io/users';

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios('/users');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
