import { LoginResponse } from "../entities/login-response.entity";

export const createLoginResponseAdapter = (response: any): LoginResponse => {
  return {
    access_token: response.access_token,
    email: response.email,
    name: response.name,
    lastName: response.lastName,
  };
};
