import { useRouter } from "next/router";
import React from "react";

const ClientProject = () => {
  const { query } = useRouter();
  console.log(query, "query en client project");
  //tenemos acceso a id, y a projectId
  return (
    <div>
      <h1>
        project {query.projectId} made with {query.id}
      </h1>
    </div>
  );
};

export default ClientProject;
