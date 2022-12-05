import React from "react";
import Link from "next/link";

const ClientPage = () => {
  const clients = [
    {
      id: "max",
      name: "Max",
    },
    {
      id: "deen",
      name: "Deen",
    },
  ];
  return (
    <div>
      ClientPage
      <ul>
        <li>
          {clients.map(({ id, name }) => (
            <li key={id}>
              <Link href={`/clients/${id}`}>{name}</Link>
            </li>
          ))}
          {/* OR */}

          {/* {clients.map(({ id, name }) => (
            <li key={id}>
              <Link
                href={{
                  pathname: "clients/[id]",
                  query: { id: id },
                }}
              >
                {name}
              </Link>
            </li>
          ))} */}
        </li>
      </ul>
    </div>
  );
};

export default ClientPage;
