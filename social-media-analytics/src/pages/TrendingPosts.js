import React, { useEffect, useState } from "react";

const TrendingPosts = () => {
  const [trendingPosts, setTrendingPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingPosts = async () => {
      try {
        const response = await fetch("http://localhost:5000/posts?type=popular"); // Replace with actual API URL
        if (!response.ok) throw new Error("Failed to fetch trending posts");
        
        const data = await response.json();
        setTrendingPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingPosts();
  }, []);

  if (loading) return <p>Loading trending posts...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Trending Posts</h2>
      <div className="bg-white p-4 shadow rounded">
        {trendingPosts.map((post) => (
          <div key={post.id} className="py-2 border-b last:border-none">
            <p className="font-bold">{post.content}</p>
            <p className="text-sm text-gray-500">Comments: {post.comments}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingPosts;
