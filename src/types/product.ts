export interface Iproduct {
  fields: {
    productnName: string;
    stok: string;
    rating: number;
    priceProduct: string;
    slug: string;
    thumbnaill: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
}
