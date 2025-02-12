"use client"
import { useState } from "react";
import DupattaComp from "../components/dupattaComp/DupattaComp";
import FormalComp from "../components/formalComp/FormalComp";
import SaleComp from "../components/saleComp/SaleComp";

const users = [
    { id: 1, component: <DupattaComp/> },
    { id: 2, component: <FormalComp/> },
    { id: 3, component: <SaleComp/> }

//   { id: 1, name: "Alice Johnson" },
//   { id: 2, name: "Bob Smith" },
//   { id: 3, name: "Charlie Brown" },
//   { id: 4, name: "David Williams" },
];

export default function UserFilter() {
  const [search, setSearch] = useState("");

  // Filter users based on input
  const filteredUsers = users.filter((user) =>
    user.component.includes(search)
  );

  return (
    <div className="max-w-md mx-auto p-4">
      <input
        type="text"
        placeholder="Search users..."
        className="w-full p-2 border rounded-lg mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul className="space-y-2">
      <div className="space-y-2">
        {filteredUsers.length > 0 ? (
          filteredUsers.map(({ id, component: Component }) => (
            <Component key={id} />
          ))
        ) : (
          <p className="text-gray-500">No products found.</p>
        )}
      </div>
      </ul>
    </div>
  );
}
