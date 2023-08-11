import { ViewCountSupbaseAdapter } from "@/types/viewCountSupabaseAdapter";

export class ViewCountAdapterLocal implements ViewCountSupbaseAdapter {
  private readonly data: any[] = [{ slug: "hello-world", count: 1 }];

  public async insert<T>(dataToInsert: T): Promise<{ data: any; error: any }> {
    this.data.push(dataToInsert);
    console.log("inserted", this.data);
    return { data: this.data, error: null };
  }

  public async updateBySlug<T>(update: T, slug: string): Promise<void> {
    const index = this.data.findIndex((item) => item.slug === slug);
    this.data[index] = { ...this.data[index], ...update };
    console.log("updated", this.data);
  }

  public async fetchBySlug(slug: string): Promise<{ data: any; error: any }> {
    const data = this.data.filter((item) => item.slug === slug);
    console.log("fetched", data);
    return { data, error: null };
  }

  public async fetchAll(): Promise<{ data: any; error: any }> {
    console.log("fetched all", this.data);
    return { data: this.data, error: null };
  }
}

export const viewCountAdapterLocal = new ViewCountAdapterLocal();
