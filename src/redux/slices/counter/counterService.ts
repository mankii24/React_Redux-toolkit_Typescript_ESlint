import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';
import CONFIG from 'app/config';

interface ApiError {
  message?: string;
  code?: string;
  name?: string;
}

export const getUser = async () => {
  try {
    const { data } = await axios.get(`${CONFIG.BASE_URL}/users`);
    return data;
  } catch (e) {
    console.log(e);
    const error = e as ApiError;
    // console.log(error);
    toast.error(error.message);
    return null;
  }
};

export const getUserList = createAsyncThunk('user/getUserList', getUser);

// export const setItem = createAsyncThunk(
//   'Todo/setItem',
//   async (params, thunkAPI) => {
//     try {
//       thunkAPI.dispatch(deleteFromList(params));
//     } catch (e) {
//       return console.error(e.message);
//     }
//   }
// );
