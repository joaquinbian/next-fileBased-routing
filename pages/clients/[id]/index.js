import { useRouter } from "next/router";
import React from "react";

const ClientProjectsList = () => {
  const router = useRouter();
  console.log(router.query);
  //podemos seguir accediendo a la prop id de la query, por el nombre de la carpeta en la que estamos

  const loadProjectHandler = () => {
    //para viajar programatically
    // router.push(`/clients/${router.query.id}/project1`);

    //tambien tenemos esta otra forma, como antes
    router.push({
      pathname: "/clients/[id]/[projectId]",
      query: { id: router.query.id, projectId: "project2-object-path" },
    });
  };
  return (
    <div>
      <h1>List of project made with the client {router.query.id}</h1>
      <button onClick={loadProjectHandler}>see project 1</button>
    </div>
  );
};

export default ClientProjectsList;
