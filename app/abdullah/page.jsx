import Link from "next/link";

export const metadata = {
  title: "Abdullah Page",
};

export default function Abdo() {
  return (
    <div>
      <h1>Hello Abdo</h1>
      <Link href="/posts">
        <button>Take me to the posts</button>
      </Link>
    </div>
  );
}
