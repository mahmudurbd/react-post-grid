import React, { useEffect, useState } from "react";
import PostCard from "../PostCard/PostCard";
import "./BlogPosts.scss";
import FeaturedPost from "../FeaturedPost/FeaturedPost";

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [visible, setVisible] = useState(4);

  useEffect(() => {
    // Fetch posts data
    const fetchPosts = async () => {
      try {
        const res = await fetch("./posts.json");
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  // Function to show more posts
  const handleLoadMore = () => {
    setVisible((prev) => prev + 3);
  };

  // Loading state
  if (posts.length === 0) return <p>Loading...</p>;
  return (
    <div className="blog-posts-container">
      <div className="blog-posts">
        {/* Featured + first 3 posts section */}
        <div className="blog-posts-top">
          <div className="post-one">
            <FeaturedPost post={posts[0]} />
          </div>
          <div className="post-two">
            <PostCard className="post-two" post={posts[1]} />
          </div>
          <div className="post-three">
            <PostCard post={posts[2]} />
          </div>
          <div className="post-four">
            <PostCard post={posts[3]} />
          </div>
        </div>

        {/* More Posts Area */}
        <div className="posts-more-area">
          {posts?.slice(4, visible).map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>

      {/* Load More button */}
      {visible < posts.length && (
        <button className="load-more-btn" onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default BlogPosts;
