import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
import { instance } from 'redux/auth/authOperations';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, thunkAPI) => {
    try {
      Notiflix.Report.success('Super !', ` New contact added!`, 'Close', {
        svgSize: '200px',
        titleFontSize: '24px',
        messageFontSize: '20px',
        buttonFontSize: '16px',
        width: '300px',
        backOverlay: true,
        backOverlayClickToClose: true,
      });
      const response = await instance.post('/contacts', data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (contactsId, thunkAPI) => {
    try {
      const response = await instance.delete(`/contacts/${contactsId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
