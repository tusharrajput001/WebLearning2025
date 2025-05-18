import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(savedPosts);
  }, []);
  return (
    <div>
      <h2>All Blog Posts</h2>
      <Link to="/new">
        <button>Add New Post</button>
      </Link>
      <hr />
      {posts.length === 0 ? (
        <p>No Posts yet</p>
      ) : (
        posts.map((post) => (
          <div
            key={post.id}
            style={{
              border: "1px solid #ccc",
              margin: "10px",
              padding: "10px",
            }}
          >
            <h3>{post.title}</h3>
            <p>{post.message}</p>
            <Link to={`/post/${post.id}`}>Read More</Link>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
