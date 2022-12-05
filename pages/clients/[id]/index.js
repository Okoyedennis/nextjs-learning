import React from "react";
import { useRouter } from "next/router";

const ClientProjectPage = () => {
  const router = useRouter();

  const loadPageHandler = () => {
    // Do something...
    router.push("/clients/max/projecta");
  };

  return (
    <div>
      ClientProjectPage
      <button onClick={loadPageHandler}>Load another page</button>
    </div>
  );
};

export default ClientProjectPage;
