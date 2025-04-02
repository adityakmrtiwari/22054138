import React from "react";

const PostCard = ({ post }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-4">
      <img src={post.image} alt="Post" className="w-full h-40 object-cover rounded" />
      <h3 className="text-lg font-semibold mt-2">{post.title}</h3>
      <p className="text-gray-600">{post.content}</p>
      <p className="text-sm text-gray-500">Comments: {post.commentCount}</p>
    </div>
  );
};

export default PostCard;
