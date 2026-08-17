import React from "react";
import { useParams } from "react-router-dom";
import "./SinglePost.css";
import Sidebar from "../../components/layout/Sidebar/SideBar";
import PostCard from "../../components/feature/post/PostCard";
import CommentList from "../../components/feature/comment/CommentList";
import allPosts from "../../data/post";

function SinglePost() {
  const { id } = useParams();
  const post = allPosts.find((p) => p.id === id);

  if (!post)
    return (
      <div className="single-post-page fullpage">
        <p>Post not found</p>
        <Sidebar />
      </div>
    );

  return (
    <div className="single-post-page fullpage">
      <div>
        <PostCard
          id={post.id}
          title={post.title}
          content={post.content}
          showLink={false}
        />
        <CommentList postid={post.id} />
      </div>
      <Sidebar />
    </div>
  );
}

export default SinglePost;
