import React from "react";
import "@/styles/blogscard.css";

const BlogsCard = () => {
  return (
    <div
      className="blogsCard"
      onMouseEnter={() => document.body.classList.add("no-cursor")}
      onMouseLeave={() => document.body.classList.remove("no-cursor")}
    >
      <div className="content">
        <p className="blogsText">Blogs</p>
      </div>
    </div>
  );
};

export default BlogsCard;
