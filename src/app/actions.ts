import isProduction from "@/utilities/isProduction";
import { viewCountAdapter } from "@/utilities/viewCountAdapter";
import { viewCountAdapterLocal } from "@/utilities/viewCountAdapterLocal";

const adapter = isProduction() ? viewCountAdapter : viewCountAdapterLocal;

export async function increment(slug: string) {
  const { data: countData, error: countError } = await adapter.fetchBySlug(
    slug
  );

  if (countError) {
    console.log({ countError });
    return;
  }
  console.log({ countData });

  if (!countData.length) {
    await adapter.insert({ slug, count: 1 });
    return;
  }

  const slugCount = countData[0].count;
  await adapter.updateBySlug({ count: slugCount + 1 }, slug);
}

export async function getAllViews() {
  const { data } = await adapter.fetchAll();
  return data ?? [];
}
