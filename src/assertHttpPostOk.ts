import axios from "axios";

export default async function assertPostStatus(url: string, statusCode: number = 200) {
  const { status } = await axios.post(url, { timeout: 5000 });
  if (status != statusCode) {
    throw new Error(`Expected response ${statusCode}, got ${status}`);
  }
}
