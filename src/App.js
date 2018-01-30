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
    return <div className="App">
      <header>
            
      </header>
      <input className="comment-input" onChange={this.handleChange} placeholder="Название новости" value={newsInput} />
      {/* <a hr="#" className="button" onClick={this.handleNewPost}>Отправить</a> */}
      <button onClick={this.handleNewPost}>Отправить</button>
      {this.state.news.map((value, i) => <NewsPost id={value} key={value} text={value}/>)}
    </div>;    
    
  }

  handleChange = event=>{
    this.setState({newsInput: event.target.value});
    console.log(this.state);
  }

  handleNewPost = ()=>{
    if(!this.state.newsInput)
      return;
      
    this.setState(prevState => ({
      news: [...prevState.news, {text: this.state.newsInput}]
    }))
    this.setState({newsInput: ""});
    console.log(this.state.news);
  }
}
export default App;
