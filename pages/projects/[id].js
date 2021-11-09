import React from "react";
import { useRouter } from "next/router";

const Project = () => {
  const router = useRouter();
  console.log(router.pathname, "pathname");
  console.log(router.query, "query");
  return (
    <div>
      <h1>Project tal{router.query.id}</h1>
    </div>
  );
};

export default Project;
