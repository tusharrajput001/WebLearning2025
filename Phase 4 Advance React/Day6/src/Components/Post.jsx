import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";


function Post() {
  const { id } = useParams(); // get ID from URL
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const found = posts.find((p) => p.id === parseInt(id));
    if (found) {
      setPost(found);
    } else {
      navigate("/"); // if post not found, go home
    }
  }, [id, navigate]);

  const handleDelete = () => {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const updated = posts.filter((p) => p.id !== parseInt(id));
    localStorage.setItem("posts", JSON.stringify(updated));
    navigate("/"); // go home after delete
  };

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.message}</p>

      <button onClick={handleDelete}>Delete</button>
      <Link to={`/edit/${post.id}`}>
        <button>Edit</button>
      </Link>
    </div>
  );
}

export default Post;
