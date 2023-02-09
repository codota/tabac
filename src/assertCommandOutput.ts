import { exec } from "node:child_process";
import { promisify } from "node:util";
const execAsync = promisify(exec);

export default async function assertCommandOutput(
  command: string,
  output: string
) {
  const { stdout, stderr } = await execAsync(command, { timeout: 5000 });

  if (stderr) {
    throw new Error(stderr);
  }

  if (stdout) {
    if (stdout.indexOf(output) == -1) {
      throw new Error(`expected: ${output}\n got: ${stdout}`);
    }
  }
}
