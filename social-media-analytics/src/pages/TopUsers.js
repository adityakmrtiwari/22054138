import React, { useState, useEffect } from "react";
import { fetchUsers } from "../services/api";

const TopUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUsers = async () => {
      const data = await fetchUsers();
      if (data.error) setError(data.error);
      else setUsers(Object.entries(data.users)); // Convert object to array
    };

    loadUsers();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Top Users</h1>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <ul className="mt-4 space-y-2">
          {users.map(([id, name]) => (
            <li key={id} className="p-2 bg-blue-100 rounded">{name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TopUsers;
