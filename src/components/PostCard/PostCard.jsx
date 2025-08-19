import React from "react";
import "./PostCard.scss";
import UserIcon from "../../assets/user.svg";
import CalendarIcon from "../../assets/calendar.svg";

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <img src={post.image} alt={post.title} />
      <div className="card-content">
        <h3 className="card-title">{post.title}</h3>
        <div className="card-meta">
          <div className="user-area">
            <img src={UserIcon} alt={post.title} />
            <span>{post?.author}</span>
          </div>
          <div className="calendar-area">
            <img src={CalendarIcon} alt="" />
            <span>{post?.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
