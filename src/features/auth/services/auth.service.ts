import axios from "axios";
export async function loginUser(email: string, password: string) {
  const { data } = await axios.get("http://localhost:3001/users", {
    params: {
      email,
      password,
    },
  });
  return data;
}
