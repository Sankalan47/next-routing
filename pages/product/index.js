import Link from "next/link";
function ProductList({ productId = 100 }) {
  return (
    <>
      {/* <Link href="/">Home Page</Link>
      <Link href={"/product/1"}>Product 1</Link>
      <Link href={"/product/2"}>Product 2</Link>
      <Link href={"/product/3"} replace>
        Product 3
      </Link>
      <Link href={`/product/${productId}`}>Product {productId}</Link> */}

      <div className="p-10 mx-auto items-center">
        <h1 className="text-7xl font-bold text-center">Products Page</h1>

        <div className="mx-auto p-4 bg-inherit flex content-center items-center justify-center">
          <div className="m-2 p-4 border-4 border-sky-500 rounded-lg">
            <Link replace href="/product/1" className="text-5xl">
              Product 1
            </Link>
          </div>
          <div className="m-2 p-4 border-4 border-sky-500 rounded-lg">
            <Link replace href="/product/2" className="text-5xl">
              Product 2
            </Link>
          </div>
          <div className="m-2 p-4 border-4 border-sky-500 rounded-lg">
            <Link replace href="/product/3" className="text-5xl">
              Product 3
            </Link>
          </div>
          <div className="m-2 p-4 border-4 border-sky-500 rounded-lg">
            <Link replace href="/" className="text-5xl">
              Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
