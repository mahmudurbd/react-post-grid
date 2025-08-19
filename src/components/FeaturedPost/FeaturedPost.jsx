import React from "react";
import "./FeaturedPost.scss";
import UserIcon from "../../assets/user.svg";
import CalendarIcon from "../../assets/calendar.svg";
const FeaturedPost = ({ post }) => {
  console.log(post);
  return (
    <div className="featured-post">
      <img src={post?.image} alt={post?.title} />
      <div className="featured-content">
        <span className="category">{post?.category}</span>
        <h2 className="featured-title">{post?.title}</h2>
        <div className="featured-meta">
          <div className="user-area">
            <img src={UserIcon} alt="" />
            <span>{post?.author}</span>
          </div>
          <div className="calendar-area">
            <img src={CalendarIcon} alt="" />
            <span>{post?.date}</span>
          </div>
        </div>
        <p className="featured-description">{post?.description}</p>
        <button className="read-more-btn">Read More</button>
      </div>
    </div>
  );
};

export default FeaturedPost;
