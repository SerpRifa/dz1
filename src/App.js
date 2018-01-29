import React, { Component } from "react";
import NewsPost from"./NewsPost";
import "./App.css";


class App extends Component {
  state = {
    value:"",
    news:[]
  }
  render() {
    const {value} = this.state;
    return <div className="App">
      <header>
            
      </header>
      <input className="comment-input" onChange={this.onHandleChange} placeholder="Название новости" value={value} />
      <a hr="#" className="button" onClick={this.onAddNews}>Отправить</a>
      {this.state.news.map(value => <NewsPost key= {value} message={value}/>)}
    </div>;    
    
  }

  onHandleChange = event=>{
    this.setState({value: event.target.value});
    console.log(this.state);
  }

  onAddNews = ()=>{
    if(!this.state.value)
      return;
      
    this.setState(prevState => ({
      news: [...prevState.news, this.state.value]
    }))

    console.log(this.state.news);
  }
}
export default App;
