import React from "react";
import { Link } from "react-router-dom";
import "./PostCard.css";
import LabelValue from "../../ui/LableValue/LabelValue";

function PostCard(props) {
  return (
    <div className="post-Container">
      <h1 className="post-Title">{props.title}</h1>
      <LabelValue title="Author" content="Author1" />
      <LabelValue title="Date" content="date1" />
      <p className="post-Content">{props.content}</p>
      {props.showLink && <Link to={`/post/${props.id}`}>Read More</Link>}
      <div className="post-reaction">
        <button className="like-button">🤍</button>
        {props.showLink && (
          <Link to={`/post/${props.id}`} className="comments-bubble">
            💬
          </Link>
        )}
      </div>
    </div>
  );
}

export default PostCard;
