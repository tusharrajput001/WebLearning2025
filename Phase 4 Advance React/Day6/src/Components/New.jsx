import React from "react";
import PostForm from "./PostForm";
import { useNavigate } from "react-router-dom";

function New() {
  const navigate = useNavigate();

  const handleAddPost = (data) => {
    const { title, message } = data;

    const existingPost = JSON.parse(localStorage.getItem("posts")) || [];

    const newPost = {
      id: Date.now(),
      title,
      message,
    };

    const updatePost = [...existingPost, newPost];
    localStorage.setItem("posts", JSON.stringify(updatePost));
    navigate("/");
  };
  return (
    <>
      <div>
        <h2>Add new Post</h2>
        <PostForm onSubmit={handleAddPost} />
      </div>
    </>
  );
}

export default New;
