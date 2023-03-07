import Link from "next/link";

const PageNotFound = () => {
  return (
    <div className="flex justify-center items-center">
      <h1 className="text-center text-xl">404 | Page not Found</h1>
      <br />
      <Link href="/">Home Page</Link>
    </div>
  );
};

export default PageNotFound;
