export async function testAsync(description: string, fn: () => Promise<void>) : Promise<{test: string, result: string, details?: any}>  {
  process.stdout.write(description + "... ");
  try {
    await fn();
    console.log("OK");
    return {test: description, result: 'OK'};
  } catch (e) {
    console.log("FAIL");
    console.error(e);
    return {test: description, result: 'FAIL', details:e};
  }

}

export function test(description: string, fn: () => void): {test: string, result: string, details?: any}  {
  process.stdout.write(description + "... ");
  try {
    fn();
    console.log("OK");
    return {test: description, result: 'OK'};
  } catch (e) {
    console.log("FAIL");
    console.error(e);
    return {test: description, result: 'FAIL', details:e};
  }
}
