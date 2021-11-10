import React from "react";
import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1>Hello next world</h1>
      <ul>
        <li>
          <Link href="/about">go about</Link>
        </li>
        <li>
          <Link replace href="/about">
            go about replace
          </Link>
        </li>
        <li>
          <Link href="/projects">go projects</Link>
        </li>
        <li>
          <Link href="/clients">go clients</Link>
        </li>
        {/* replace no pushea la ruta, si viajamos con ese y volvemos para atras 
          la pagina index nno esta en el historial
      */}
      </ul>
    </div>
  );
}

export default HomePage;
