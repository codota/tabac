import os from "os";

export default function assertCores(cores: number): void {
  if (os.cpus().length >= cores) {
    throw new Error(
      `Expected at least ${cores} cores but got ${os.cpus().length}`
    );
  }
}
