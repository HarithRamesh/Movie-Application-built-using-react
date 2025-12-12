import axios from "axios";

export async function getMovies() {
  const response = await axios.get("http://51.20.209.97:3001");
  return response.data;
}
