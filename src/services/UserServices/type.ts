export interface CreateUserBodyParams {
  user: {
    name: string;
    email: string;
    password: string;
  };
}

export interface PatchUserBodyParams {
  userId: string;
  user: {
    email: string;
    password: string;
  };
}

export interface GetUserResponsetype {
  name: string;
  email: string;
  password: string;
}

export interface GetUserTokensResponseType {
  message: string;
  token: string;
  refreshToken: string;
  userId: string;
  name: string;
}

export interface CreateUserResponseType {
  id: string;
  name: string;
  email: string;
}
