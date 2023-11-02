import axios from 'axios';
import {
  CreateUserBodyParams,
  CreateUserResponseType,
  GetUserResponsetype,
  GetUserTokensResponseType,
  PatchUserBodyParams,
} from './type';

// FIX: Insert Token in here
const instance = axios.create({
  baseURL: 'https://rslang-backend-76ch.onrender.com',
});

export const postUser = async ({user}: CreateUserBodyParams) => {
  const createdUser = await instance
    .post<CreateUserResponseType>('/users', {
      ...user,
    })
    .then(resp => {
      console.log(resp.data);
      return resp.data;
    });

  return createdUser;
};

// Access token
export const getUser = async (userId: string) => {
  const user = await instance
    .get<GetUserResponsetype>('/', {params: {id: userId}})
    .then(resp => {
      console.log(resp.data);
      return resp.data;
    });

  return user;
};

// Access token
export const getNewUserToken = async (userId: string) => {
  const tokens = await instance
    .get<GetUserTokensResponseType>(`/${userId}/tokens`)
    .then(resp => {
      console.log(resp.data);
      return resp.data;
    });

  return tokens;
};

// Access token
export const patchUser = async ({userId, user}: PatchUserBodyParams) => {
  await instance.put('/', {...user}, {params: {id: userId}});
};

// Access token
export const deleteUser = async (userId: string) => {
  await instance.delete('/', {params: {id: userId}});
};
