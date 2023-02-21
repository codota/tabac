import { test, testAsync } from "./test";
import assertHttpGetOk from "./assertHttpGetOk";
import assertMemoryGb from "./assertMemorySize";
import assertCores from "./assertCores";
import assertHttpPostOk from "./assertHttpPostOk";

export default async function clientAutoConf(inferenceUrl: string) {
  await testAsync("Connection to Tabnine update server", async () => {
    await assertHttpGetOk("https://update.tabnine.com/bundles/version");
  });

  await testAsync("Connection to Tabnine notifcation server", async () => {
    await assertHttpGetOk("https://notify.tabnine.com/health");
  });

  await testAsync("Connection to Tabnine inference service", async () => {
    await assertHttpGetOk(`${inferenceUrl}/health`);
  });
  await testAsync("attempting inference request", async () => {
    await assertHttpPostOk(`${inferenceUrl}/infer`);
  });





  test("Memory size", () => {
    assertMemoryGb(8);
  });

  test("Cpu cores", () => {
    assertCores(4);
  });
}
