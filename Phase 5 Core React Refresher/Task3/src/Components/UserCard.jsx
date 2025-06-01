import React from "react";

function UserCard({ data }) {
  if (!data) return null;
  return(
    <>
    <div style={{ border: "1px solid #ccc", padding: "1rem", marginTop: "1rem" }}>
      <img src={data.avatar_url} alt="avatar" width="100" />
      <h2>{data.name}</h2>
      <p><strong>Username:</strong> {data.login}</p>
      <p><strong>Followers:</strong> {data.followers}</p>
      <p><strong>Following:</strong> {data.following}</p>
      <p><strong>Public Repos:</strong> {data.public_repos}</p>
      <a href={data.html_url} target="_blank" rel="noreferrer">View Profile</a>
    </div>
    </>
  )
}

export default UserCard;
