import React from 'react';
import "./Blog.css";

function Blog() {
  return (
    <div className="blog-page">
      <h1>Recipes.</h1>
      <div className="search-bar">
        <input type="text" placeholder="Search..." id="search-input" />
        <button id="search-button">Search</button>
      </div>
      {/* Add blog content here */}
    </div>
  );
}

export default Blog;
