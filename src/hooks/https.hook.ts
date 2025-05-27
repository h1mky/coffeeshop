import axios, { AxiosError } from "axios";

export const request = async (
  url: string,
  method = "GET",
  body: string | null = null,
  headers = {},
  isReturnStatus: boolean = false
) => {
  try {
    const response = await axios({
      url,
      method,
      data: body,
      headers: { "Content-Type": "application/json", ...headers },
    });

    if (isReturnStatus === true) {
      return {
        data: response.data,
        status: response.status,
      };
    }

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
