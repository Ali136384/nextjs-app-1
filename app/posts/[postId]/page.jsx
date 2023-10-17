import React, { Suspense } from "react";
import PostDetails from "../postDetails";

async function page(props) {
  return (
    <div>
      <h1 className=" p-6">post Ali bey Githup</h1>
      <Suspense fallback={<span class="loader"></span>}>
        <PostDetails postId={props.params.postId} />
      </Suspense>
    </div>
  );
}

export default page;
