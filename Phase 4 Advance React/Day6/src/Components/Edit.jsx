import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PostForm from "./PostForm";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const found = posts.find((p) => p.id === parseInt(id));
    if (found) {
      setPost(found);
    } else {
      navigate("/"); // if post not found
    }
  }, [id, navigate]);

  const handleUpdate = (updatedData) => {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const updatedPosts = posts.map((p) =>
      p.id === parseInt(id) ? { ...p, ...updatedData } : p
    );
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    navigate("/");
  };

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h2>Edit Post</h2>
      <PostForm initialData={post} onSubmit={handleUpdate} />
    </div>
  );
}

export default Edit;
