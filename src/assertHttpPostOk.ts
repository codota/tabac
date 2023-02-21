import axios from "axios";

export default async function assertPostOk(url: string) {
  const { status } = await axios.post(url, { timeout: 5000 });
  if (status != 200) {
    throw new Error(`Expected response 200, got ${status}`);
  }
}
