import React from "react";
import { useRouter } from "next/router";

const Blog = () => {
  const router = useRouter();
  return (
    <div>
      <h1>{JSON.stringify(router)}</h1>
    </div>
  );
};

export default Blog;
