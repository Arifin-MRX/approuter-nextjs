import { NextRequest, NextResponse } from "next/server";
const data = [
  {
    id: 1,
    name: "Product 1",
    description: "Description for Product 1",
    price: 100,
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description for Product 2",
    price: 200,
  },
];
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
if(id){
  const detailProduct = data.find(item => item.id === Number(id));
  if(detailProduct){
    return NextResponse.json({ status: 200, message: "success", data: detailProduct });
  }else{
    return NextResponse.json({ status: 404, message: "Product not found" });
  }
}

  return NextResponse.json({ status: 200, message: "success", data });
}
