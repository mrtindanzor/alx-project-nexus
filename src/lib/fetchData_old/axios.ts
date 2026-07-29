import axios, { type AxiosInstance } from "axios";
import type { GetAxoisInstanceProps } from "./fetchData.types";

const serverUri = process.env.NEXT_PUBLIC_SERVER_URI;
if (!serverUri) throw Error("Server Uri not defined");

export function axiosInstance({
  headers,
}: GetAxoisInstanceProps = {}): AxiosInstance {
  return axios.create({ baseURL: serverUri, headers, proxy: false });
}
