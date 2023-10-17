import React from "react";
import "./styl.css";

async function PostDetails({ postId }) {
  await new Promise((resolve) => {
    setTimeout(() => resolve(), 2000);
  });
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  const post = await result.json();
  return (
    <div>
      <h1>{post.title}</h1>
      <h1>{post.body}</h1>
    </div>
  );
}

export default PostDetails;
