import Link from "next/link";
import React from "react";

function Clients() {
  const clients = [
    { id: "max", name: "maximilian" },
    { id: "joaco", name: "joaquin" },
    { id: "manu", name: "manuel" },
  ];

  return (
    <div>
      <h1>Clients page</h1>
      <ul>
        {clients.map((c) => (
          <li key={c.id}>
            {/* otra forma de escribir los link */}
            <Link
              href={{
                pathname: "/clients/[id]", //path del sistema de archivos
                query: { id: c.id }, //query dinamico
              }}
            >
              {c.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Clients;
