import { getData } from "@/services/products";
import Image from "next/image";
import Link from "next/link";

type DetailProductPageProps = {
  params: { slug: string[] };
};
type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};



export default async function ProductDetailPage(props: DetailProductPageProps) {
  const { params } = props;
  const products = await getData("http://localhost:3000/api/product");
  console.log(products);
  return (
    <div className="grid grid-cols-4 m-2 place-items-center gap-2">
      {/* <h1>{params.slug ? "Product Detail" : "Product"}</h1> */}
      {products.data.map((product: Product) => (


        <Link href={`/product/detail/${product.id}`} key={product.id} className=" w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <img className="p-8 rounded-t-lg object-cover h-80 w-full" src={product.image} alt="product image" />
          <div className="px-5 pb-5">
            <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">{product.title}</h5>
            <div className="flex items-center justify-between mt-3">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">{product.price}</span>
              <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
            </div>
          </div>
        </Link>


      ))}
      {params.slug && (
        <>
          <p>Kategori : {params.slug[0]}</p>
          <p>Gender : {params.slug[1]}</p>
          <p>ID : {params.slug[2]}</p>
          <p>ID : {params.slug[3]}</p></>
      )}
    </div>
  );
}
