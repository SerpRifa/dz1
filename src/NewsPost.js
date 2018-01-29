import React, { Component } from "react";
import "./NewsPost.css";

class NewsPost extends Component {

  render() {
    const {message} = this.props;
    console.log(message);
    return <div className="news-post">
      <p>{message}</p>
    </div>;    
    
  } 
}
export default NewsPost;
