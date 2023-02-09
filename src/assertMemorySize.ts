import os from "os";

const ONE_GB = Math.pow(1024, 3);

export default function assertMemoryGb(memoryGb: number) {
  const ramMemoryGb = os.totalmem() / ONE_GB;
  if (ramMemoryGb < memoryGb) {
    throw new Error(
      `Memory required is ${memoryGb} Gb, but only ${ramMemoryGb} Gb is available.`
    );
  }
}
