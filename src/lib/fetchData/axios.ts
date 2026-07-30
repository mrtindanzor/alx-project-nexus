import axios from "axios";
import { publicUrls } from "@/config/publicUrls";

export function axiosInstance() {
  return axios.create({
    baseURL: publicUrls.serverUri,
  });
}
