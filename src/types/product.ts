export interface Iproduct {
  fields: {
    productnName: string;
    stok: string;
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
