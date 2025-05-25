import axios, { AxiosError } from "axios";

export const request = async (
  url: string,
  method = "GET",
  body = null,
  headers = {}
) => {
  try {
    const response = await axios({
      url,
      method,
      data: body,
      headers: { "Content-Type": "application/json", ...headers },
    });

    return response.data;
  } catch (e) {
    const error = e as AxiosError;

    throw new Error(
      `Could not fetch ${url}, status: ${
        error.response?.status || error.message
      }`
    );
  }
};
