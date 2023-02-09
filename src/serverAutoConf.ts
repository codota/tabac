import { testAsync, test } from "./test";
import assertCommandOutput from "./assertCommandOutput";
import assertMemoryGb from "./assertMemorySize";

export default async function serverAutoConf() {
  await testAsync("Cuda version", async () => {
    await assertCommandOutput(
      "nvcc --version",
      "Cuda compilation tools, release 11.7, V11.7.99"
    );
  });

  await testAsync("Access to gcs buckets", async () => {
    await assertCommandOutput("gcloud --version", "Google Cloud SDK");
    await assertCommandOutput(
      "gsutil ls gs://artifacts.tabnine-self-hosted.appspot.com/",
      "containers"
    );
    await assertCommandOutput(
      "gsutil ls gs://tabnine-self-hosted-models",
      "12langs"
    );
  });

  test("Memory size", () => {
    assertMemoryGb(8);
  });
}
