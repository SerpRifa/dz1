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
      <input className="comment-input" onChange={this.handleChange} placeholder="Название новости" value="" />
      <a hr="#" className="button" onClick={this.handleNewPost}>Отправить</a>
      {this.state.news.map(value => <NewsPost key= {value} message={value}/>)}
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
      news: [...prevState.news, this.state.newsInput]
    }))
    this.setState({newsInput: ""});
    console.log(this.state.news);
  }
}
export default App;
