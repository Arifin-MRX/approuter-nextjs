import { NextRequest, NextResponse } from "next/server";
const data = [
  {
    id: 1,
    title: "Product 1",
    image:
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_519,c_limit/a43dd606-dd86-4bf9-aed5-6c70da27aa58/gato-shoes-2gmOIRKa.png",
    description: "Description for Product 1",
    price: 100,
  },
  {
    id: 2,
    title: "Product 2",
    image:
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_519,c_limit/21f56016-2e59-4392-b80f-c9440573f798/vaporfly-4-road-racing-shoes-PTwDtp.png",
    description: "Description for Product 2",
    price: 200,
  },
  {
    id: 3,
    title: "Product 3",
    image:
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_519,c_limit/21f56016-2e59-4392-b80f-c9440573f798/vaporfly-4-road-racing-shoes-PTwDtp.png",
    description: "Description for Product 2",
    price: 200,
  },
  {
    id: 4,
    title: "Product 4",
    image:
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_519,c_limit/21f56016-2e59-4392-b80f-c9440573f798/vaporfly-4-road-racing-shoes-PTwDtp.png",
    description: "Description for Product 2",
    price: 200,
  },
];
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    const detailProduct = data.find((item) => item.id === Number(id));
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "success",
        data: detailProduct,
      });
    } else {
      return NextResponse.json({ status: 404, message: "Product not found" });
    }
  }

  return NextResponse.json({ status: 200, message: "success", data });
}
