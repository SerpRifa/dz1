import React, { Component } from "react";
import "./NewsPost.css";

class NewsPost extends Component {

  render() {
    const {text} = this.props;
    const {key} = this.props;
    console.log(text);
    return <div className="news-post">
      <p>{text}</p>
    </div>;    
    
  } 
}
export default NewsPost;
