import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-4 flex items-center gap-4">
      <img src={user.avatar} alt="User" className="w-12 h-12 rounded-full" />
      <div>
        <h3 className="text-lg font-semibold">{user.name}</h3>
        <p className="text-sm text-gray-500">Posts: {user.postCount}</p>
      </div>
    </div>
  );
};

export default UserCard;
