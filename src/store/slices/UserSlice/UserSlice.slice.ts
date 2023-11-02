import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {postUser} from '../../../services/UserServices/UserServices';
import {GeneralState} from './type';

const createUser = createAsyncThunk(
  'user/create',
  async (user: {name: string; email: string; password: string}) => {
    const createdUser = await postUser({user});
    return createdUser;
  },
);

const initialState: GeneralState = {
  user: {
    id: '',
    name: '',
    email: '',
  },
};

const userSlice = createSlice({
  name: 'UserSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.user = {...action.payload};
    });
  },
});

export const UserReducer = userSlice.reducer;
