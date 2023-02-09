import { test, testAsync } from "./test";
import assertHttpGetOk from "./assertHttpGetOk";
import assertMemoryGb from "./assertMemorySize";
import assertCores from "./assertCores";

export default async function clientAutoConf() {
  await testAsync("Connection to Tabnine update server", async () => {
    await assertHttpGetOk("https://update.tabnine.com/bundles/version");
  });

  await testAsync("Connection to Tabnine notifcation server", async () => {
    await assertHttpGetOk("https://notify.tabnine.com/health");
  });

  test("Memory size", () => {
    assertMemoryGb(8);
  });

  test("Cpu cores", () => {
    assertCores(4);
  });
}
