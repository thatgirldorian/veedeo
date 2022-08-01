import React from "react";
import SearchBar from './SearchBar'
import youtubeApi from "../api/youtubeAPI"

class App extends React.Component {

  //add a callback to be called every time a search query is submitted
  onTermSubmit = async (term) => {
    const response = await youtubeApi.get('/search', {
      params: { 
        q: term
      }
    })

  }

  render() {

    return (
      <div className="ui container">
        <h1 className="ui violet header center aligned">veedeo.</h1>
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    )
  }
} 


export default App;
