import Link from "next/link";
import { useRouter } from "next/router";
function Home() {
  const router = useRouter();

  const handleClick = () => {
    console.log("placing order");
    router.push("/docs/1/12312");
  };

  return (
    <div className="p-10 mx-auto items-center">
      <h1 className="text-7xl font-bold text-center">Home Page</h1>

      <div className="mx-auto p-4 bg-inherit flex content-center items-center justify-center">
        <div className="m-2 p-4 border-4 border-sky-500 rounded-lg">
          <Link href="/blog">
            <h1 className="text-5xl">Blog Page Link</h1>
          </Link>
        </div>
        <div className="m-2 p-4 border-4 border-sky-500 rounded-lg">
          <Link href="/product">
            {" "}
            <h1 className="text-5xl">Product Page Link</h1>
          </Link>
        </div>
        <div className="m-2 p-4 border-4 border-sky-500 rounded-lg">
          <button onClick={handleClick} className="text-5xl">
            Random Page Link
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
