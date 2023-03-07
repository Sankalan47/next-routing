import { useRouter } from "next/router";

function ProductDetail() {
  const router = useRouter();
  const prodId = router.query.productId;

  return (
    <>
      <div className="p-10 mx-auto items-center">
        <h1 className="text-7xl font-bold text-center">
          Product Details of product {prodId}
        </h1>
      </div>
    </>
  );
}
export default ProductDetail;
