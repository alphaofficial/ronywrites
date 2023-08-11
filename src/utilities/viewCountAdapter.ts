import { PostgrestSingleResponse, SupabaseClient } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
import { ViewCountSupbaseAdapter } from "@/types/viewCountSupabaseAdapter";

export class ViewCountAdapter implements ViewCountSupbaseAdapter {
  constructor(private readonly client: SupabaseClient) {}

  private readonly tableName = "viewsCount";

  public async insert<T>(dataToInsert: T): Promise<{ data: any; error: any }> {
    const { data, error } = await this.client
      .from(this.tableName)
      .insert({ ...dataToInsert });
    return { data, error };
  }

  public async updateBySlug<T>(update: T, slug: string): Promise<void> {
    await this.client
      .from(this.tableName)
      .update({ ...update })
      .eq("slug", slug);
  }
  public async fetchBySlug(slug: string): Promise<{ data: any; error: any }> {
    const { data, error } = await this.client
      .from(this.tableName)
      .select()
      .eq("slug", slug);
    return { data, error };
  }

  public async fetchAll(): Promise<{ data: any; error: any }> {
    const { data, error } = await this.client.from(this.tableName).select();
    return { data, error };
  }
}

export const viewCountAdapter = new ViewCountAdapter(supabase);
