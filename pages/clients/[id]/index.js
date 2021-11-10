import { useRouter } from "next/router";
import React from "react";

const ClientProjectsList = () => {
  const router = useRouter();
  console.log(router.query);
  //podemos seguir accediendo a la prop id de la query, por el nombre de la carpeta en la que estamos
  return (
    <div>
      <h1>List of project made with the client {router.query.id}</h1>
    </div>
  );
};

export default ClientProjectsList;
