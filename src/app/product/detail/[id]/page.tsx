
import { getData } from "@/services/products";

export default async function DetailProductPage(props: any) {
  const { params } = props;
  const product = await getData(
    `http://localhost:3000/api/product/?id=${params.id}`
  );

  return (
    <div className="container mx-auto py-10 px-4 md:px-0">
      <div className="flex flex-col md:flex-row gap-8 bg-white p-6 md:p-10 rounded-lg shadow-lg">
        {/* Kontainer Gambar Produk */}
        <div className="md:w-1/2 rounded-lg overflow-hidden flex items-center justify-center bg-gray-100">
          <img
            src={product.data.image} 
            alt={product.data.title}
            width={500}
            height={500}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Kontainer Detail Produk */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            {product.data.title}
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
            Rp{" "}
            {product.data.price.toLocaleString("id-ID", {
              minimumFractionDigits: 0,
            })}
          </p>
          <p className="text-gray-500 leading-relaxed mb-6">
           {product.data.description}
          </p>
          <button className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 ease-in-out">
            Tambah ke Keranjang
          </button>
        </div>
      </div>
    </div>
  );
}