import React, { useState, useEffect } from "react";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLatestPosts = async () => {
      try {
        const response = await fetch("http://localhost:5000/posts?type=latest"); // Replace with actual API URL
        if (!response.ok) throw new Error("Failed to fetch latest posts");
        
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestPosts();

    // Auto-refresh every 10 seconds for real-time updates
    const interval = setInterval(fetchLatestPosts, 10000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Live Feed</h2>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="p-4 bg-white shadow rounded">
            <p className="font-bold">{post.user}</p>
            <p>{post.content}</p>
            <p className="text-sm text-gray-500">{post.timestamp}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
