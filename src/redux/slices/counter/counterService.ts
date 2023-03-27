import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import CONFIG from 'app/config';

// interface Error {
//   message: string;
//   code: string;
//   name: string;
// }

export const getUserList = createAsyncThunk('user/getUserList', async () => {
  try {
    const { data } = await axios.get(`${CONFIG.BASE_URL}/users`);
    return data;
  } catch (error) {
    console.log(error);
    // return console.error(error.message);
  }
});

// export const deleteItem = createAsyncThunk(
//   'Todo/deleteItem',
//   async (params, thunkAPI) => {
//     try {
//       thunkAPI.dispatch(deleteFromList(params));
//     } catch (e) {
//       return console.error(e.message);
//     }
//   }
// );
