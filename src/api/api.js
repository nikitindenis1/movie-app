import axios from "axios";
import { API, API_KEY } from "../tools/keys";

export const apiGetRequest = (route, page) =>

  new Promise((resolve) => {
    const api = `${API}/${route}?api_key=${API_KEY}&language=en-US&${page ? `page=${page}` : ''}`
    try {
      axios.get(api).then((res) => {
     
        
        resolve(res.data);
      });
    } catch (error) {
      resolve(false);
    }
  });

