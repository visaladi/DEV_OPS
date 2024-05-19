import { UserModel } from "../models/user.model";

async function fetchData(input: RequestInfo, init?: RequestInit) {
  const response = await fetch(input, init);

  if (response.ok) {
    return response;
  } else {
    const errorBody = await response.json();
    const errorMessage = errorBody.error;
    throw Error(errorMessage);
  }
}

export async function getLoggedInUser(): Promise<UserModel> {
  const response = await fetchData("http://localhost:8080/api/users", {
    method: "GET",
    credentials: "include",
  });

  return response.json();
}

export interface SignUpCredentials {
  username: string;
  email: string;
  password: string;
}

export async function signUp(
  credentials: SignUpCredentials
): Promise<UserModel> {
  const response = await fetchData("http://localhost:8080/api/users/signup", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  return response.json();
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export async function login(credentials: LoginCredentials): Promise<UserModel> {
  const response = await fetchData("http://localhost:8080/api/users/login", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  return response.json();
}

export async function logout() {
  await fetchData("http://localhost:8080/api/users/logout", {
    method: "POST",
    credentials: "include",
  });
}
