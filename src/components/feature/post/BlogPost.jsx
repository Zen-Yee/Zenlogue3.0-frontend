import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./BlogPost.css";
import PostCard from "./PostCard";

const API_URL = import.meta.env.VITE_API_URL;

function limit100Chars(content = "") {
  return content.length > 100 ? content.substring(0, 100) + "..." : content;
}

function createPostCards(post) {
  return (
    <PostCard
      key={post.post_id}
      id={post.post_id}
      title={post.title}
      content={limit100Chars(post.content)}
      showLink={true}
    />
  );
}

function BlogPost() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(`${API_URL}/post`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        const data = await res.json();

        if (!res.ok) {
          navigate("/error", {
            state: { message: data.message, status: res.status },
          });
          return;
        }

        setPosts(data.data);
      } catch (err) {
        console.error(err);
        navigate("/error", {
          state: { message: "Network error, please try again." },
        });
      }
    }

    getData();
  }, [navigate]);

  return <div className="blog-Container">{posts.map(createPostCards)}</div>;
}

export default BlogPost;