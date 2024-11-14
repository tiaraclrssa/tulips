import { getProduct } from "@/utils/contentful";
import { Iproduct } from "@/types/product";
import ContactUs from "@/components/contact";

export default async function ProductPage() {
  const data: Iproduct[] = await getProduct();

  return (
    <div className="bg-gray-300">
      <div className="container mx-auto py-8 mt-[92px] px-4">
        <h2 className="text-3xl md:text-4xl mt-5 font-bold mb-10">Tulips</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-gray-600 rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow"
              >
                {item.fields.thumbnaill && (
                  <img
                    src={item.fields.thumbnaill.fields.file.url}
                    alt={item.fields.productnName}
                    className="w-full h-48 md:h-60 object-cover rounded-t-lg"
                  />
                )}
                <div className="flex flex-col md:flex-row justify-between mt-4">
                  <div>
                    <h2 className="text-xl md:text-2xl text-white font-semibold">
                      {item.fields.productnName}
                    </h2>
                    <p className="text-white text-base md:text-lg">
                      Rp {item.fields.priceProduct}/tangkai
                    </p>
                    <p className="text-white text-sm">Stok: {item.fields.stok}</p>
                  </div>
                  <button className="text-white font-bold mt-3 md:mt-0 md:ml-4">
                    <p className="mb-3">Buy Now</p>
                    <ContactUs />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
