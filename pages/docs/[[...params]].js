import Link from "next/link";
import { useRouter } from "next/router";

function Doc() {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);
  if (params.length === 2) {
    return (
      <div className="p-10 mx-auto items-center">
        <h1 className="text-7xl font-bold text-center">
          Docs for feature {params[0]} example {params[1]}
        </h1>

        <div className="mx-auto p-4 bg-inherit flex content-center items-center justify-center">
          <div className="m-2 p-4 border-4 border-sky-500 rounded-lg">
            <Link replace href="/" className="text-5xl">
              Home
            </Link>
          </div>
        </div>
      </div>
    );
  }
  if (params.length === 1) {
    return <h1>Docs for feature {params[0]}</h1>;
  }
  return <h1>Docs home page</h1>;
}

export default Doc;
