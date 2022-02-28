import React, { useState } from "react";

function PostList({ posts, filter }) {
  console.log(filter);
  if (filter) {
    return (
      <ul>
        <li>{filter}</li>
      </ul>
    );
  } else
    return (
      <ul className="card-grid">
        {posts.map((item, index) => {
          if (index < 13) {
            return <li key={item}>{item.name.common}</li>;
          } else return;
        })}
      </ul>
    );
}

export default PostList;
