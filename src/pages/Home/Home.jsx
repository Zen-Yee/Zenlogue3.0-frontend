import React from "react";
import "./Home.css";
import Sidebar from "../../components/layout/Sidebar/SideBar";
import BlogPost from "../../components/feature/post/BlogPost";

function Home() {
  return (
    <div className="home-page">
      <BlogPost />
      <Sidebar />
    </div>
  );
}

export default Home;
