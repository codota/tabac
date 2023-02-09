import axios from "axios";

export default async function assertOk(url: string) {
  const { status } = await axios.get(url, { timeout: 5000 });
  if (status != 200) {
    throw new Error(`Expected response 200, got ${status}`);
  }
}
