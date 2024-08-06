import React from "react";
import Comment from "./Comment";

export default function Post({ username, isAdmin }) {
  return (
    <div>
      {isAdmin && <button>Delete post</button>}
      <h2>Post Title</h2>
      <p>This is an example post content.</p>
      <Comment username={username} isAdmin={isAdmin} />
    </div>
  );
}
