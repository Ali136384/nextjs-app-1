import React from "react";
import Link from "next/link";
async function Post() {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });

  const posts = await result.json();

  console.log(posts);

  return (
    <div className=" p-10">
      {posts.map((post) => {
        return (
          <>
            <Link href={`/posts/${post.id}`}>
              <hr className=" w-72 flex justify-center my-0 mx-auto" />
              <div className=" p-4 mb-5 rounded-lg bg-slate-50 text-black">
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </div>
            </Link>
          </>
        );
      })}
    </div>
  );
}

export default Post;
