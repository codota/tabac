export async function testAsync(description: string, fn: () => Promise<void>) {
  process.stdout.write(description + "... ");
  try {
    await fn();
    console.log("OK");
  } catch (e) {
    console.log("FAIL");
    console.error(e);
  }
}

export function test(description: string, fn: () => void) {
  process.stdout.write(description + "... ");
  try {
    fn();
    console.log("OK");
  } catch (e) {
    console.log("FAIL");
    console.error(e);
  }
}
