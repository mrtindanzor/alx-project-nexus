import { publicUrls } from "@/config/publicUrls";
import axios from "axios";

export function axiosInstance() {
  return axios.create({
    baseURL: publicUrls.serverUri,
  });
}
