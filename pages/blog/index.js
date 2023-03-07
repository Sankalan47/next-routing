import Link from "next/link";

function Blog() {
  return (
    <div className="p-10 mx-auto items-center">
      <h1 className="text-5xl font-bold text-center">Blog Page</h1>

      <div className="mx-auto p-4 bg-inherit flex content-center items-center justify-center">
        <div className="m-2 p-4 border-4 border-sky-500 rounded-lg">
          <Link href="/blog/first" className="text-5xl">
            First Blog
          </Link>
        </div>
        <div className="m-2 p-4 border-4 border-sky-500 rounded-lg">
          <Link href="/product" className="text-5xl">
            Second Blog
          </Link>
        </div>
        <div className="m-2 p-4 border-4 border-sky-500 rounded-lg">
          <Link replace href="/" className="text-5xl">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Blog;
