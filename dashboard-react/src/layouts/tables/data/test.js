// import { useEffect, useState } from "react";

// export default function DataList() {
//   const [userList, setUserList] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost:3001/users")
//       .then((response) => response.json())
//       .then((result) => setUserList(result))
//       .catch((error) => console.log(error));
//   });

//   return {
//     columns: [
//       { dataField: "id", text: "Id" },
//       { dataField: "firstname", text: "Firstname" },
//       { dataField: "lastname", text: "Lastname" },
//       { dataField: "email", text: "Email" },
//       { dataField: "phone", text: "Phone" },
//     ],
//   };
// }
import { useState, useEffect } from "react";
import axios from "axios";

function Data() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios("http://localhost:3001/users")
      .then((res) => setUsers(res.data))
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <div>
      <h1>Users</h1>

      {isLoading && <div>Laoding...</div>}

      {users.map((user) => (
        <div key={user.id}>{user.firstName}</div>
      ))}
    </div>
  );
}
export default Data;
