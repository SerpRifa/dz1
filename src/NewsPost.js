import React from "react";
import "./NewsPost.css";

export default function NewsPost({text}){
  return <div className="news-post">
      <p>{text}</p>
    </div>;   
}