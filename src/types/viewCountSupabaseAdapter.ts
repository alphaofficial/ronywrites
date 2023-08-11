export interface ViewCountSupbaseAdapter {
  insert: <T>(data: T) => Promise<{ data: any; error: any }>;
  updateBySlug: <T>(update: T, slug: string) => Promise<void>;
  fetchBySlug: (slug: string) => Promise<{ data: any; error: any }>;
  fetchAll: () => Promise<{ data: any; error: any }>;
}
