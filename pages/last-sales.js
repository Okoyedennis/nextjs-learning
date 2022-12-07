import React, { useEffect, useState } from "react";

const LastSalesPage = (props) => {
  const [users, setUsers] = useState(props.user);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     setIsLoading(true);
//     fetch(
//       "https://api.github.com/search/repositories?q=created:%3E2021-08-13&sort=stars&order=desc"
//     )
//       .then((resp) => resp.json())
//       .then((data) => {
//         setIsLoading(false);
//         setUsers(data.items);
//       });
//   }, [users]);

//   if (!users ) {
//     return <p>Loading...</p>;
//   }

  if (!users) {
    return <p>No data yet</p>;
  }

  console.log(users);
  return (
    <ul>
      {users.items.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
};

export default LastSalesPage;

export async function getStaticProps() {
  return fetch(
    "https://api.github.com/search/repositories?q=created:%3E2021-08-13&sort=stars&order=desc"
  )
    .then((resp) => resp.json())
    .then((data) => {
      return {
        props: { user: data },
        revalidate: 10,
      };
    });
}
