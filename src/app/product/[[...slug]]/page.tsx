type DetailProductPageProps = {
  params: { slug: string[] };
};

export default function ProductDetailPage(props: DetailProductPageProps) {
  const { params } = props;
  return (
    <div>
      <h1>{params.slug ? "Product Detail" : "Product"}</h1>
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
