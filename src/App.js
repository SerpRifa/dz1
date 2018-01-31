import React, { Component } from "react";
import NewsPost from"./NewsPost";
import "./App.css";


class App extends Component {
  state = {
    newsInput:"",
    news:[]
  }
  render() {
    const {newsInput} = this.state;
    const {news} = this.state;

    return <div className="App">
      <input className="comment-input" onChange={this.handleChange} placeholder="Название новости" value={newsInput} />
      {/* <a hr="#" className="button" onClick={this.handleNewPost}>Отправить</a> */}
      <button onClick={this.handleNewPost}>Отправить</button>
      {news.map((newsFromState, i) => <NewsPost  key={newsFromState.text} text={newsFromState.text}/>)}
    </div>;    
    
  }

  handleChange = event=>{
    this.setState({newsInput: event.target.value});   
  }

  handleNewPost = ()=>{
    let news = this.state.news.slice();
    const {newsInput} = this.state;

    news.push({text: newsInput});    

    this.setState({news: news, newsInput: ""});    

  }
}
export default App;
