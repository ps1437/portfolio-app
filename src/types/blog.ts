export interface Blog {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  mainImage?: {
    asset: {
      url: string;
    };
  };
  publishedAt: string;
}
