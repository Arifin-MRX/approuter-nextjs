import Image from "next/image";

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

async function getData() {
  // const res = await fetch("https://fakestoreapi.com/products");
   const res = await fetch("http://localhost:3000/api/product",
    {
      cache:"no-store",
      next : {
        // revalidate:30,
        tags:["products"],

      }
    }
   );
  if (!res.ok) {
    throw new Error("Failed to fect data");
  }
  return res.json();
}

export default async function ProductDetailPage(props: DetailProductPageProps) {
  const { params } = props;
  const products = await getData();
  console.log(products);
  return (
    <div className="grid grid-cols-4 m-2 place-items-center gap-2">
      {/* <h1>{params.slug ? "Product Detail" : "Product"}</h1> */}
      {products.data.map((product: Product) => (


        <div key={product.id} className=" w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="p-8 rounded-t-lg object-cover h-80 w-full" src={product.image} alt="product image" />
          </a>
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">{product.title}</h5>
            </a>

            <div className="flex items-center justify-between mt-3">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">{product.price}</span>
              <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
            </div>
          </div>
        </div>


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
