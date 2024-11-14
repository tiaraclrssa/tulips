import { getProduct } from "@/utils/contentful";
import { Iproduct } from "@/types/product";

export default async function ProductPage() {
  const data: Iproduct[] = await getProduct();

  return (
    <div className="bg-gray-300">
        <div className="container mx-auto py-8 mt-[92px]">
          <h2 className="text-4xl mt-5 font-bold ml-5 mb-10">Fresh Tulips </h2>
          <div className="grid grid-cols-3 gap-6">
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
                      className="w-full h-60 object-cover rounded-t-lg"
                    />
                  )}
                  <div className="">
                    <h2 className="text-2xl text-gray-950 font-semibold">
                      {item.fields.productnName}
                    </h2>
                    <p className="text-white text-lg ">
                    Rp {item.fields.priceProduct}/tangkai
                    </p>
                    <p className="text-white text-sm">Stok: {item.fields.stok}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
    </div>
      );
    }
