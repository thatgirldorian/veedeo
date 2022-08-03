import React from "react";
import SearchBar from './SearchBar'
import youtubeApi from "../api/youtubeAPI"
import VideoList from '../components/VideoList'
import VideoDetail from "../components/VideoDetail"

class App extends React.Component {
  //initialize state
  state = { videos: [], selectedVideo: null } 

  //add a callback to be called every time a search query is submitted
  onTermSubmit = async (term) => {
    const response = await youtubeApi.get('/search', {
      params: { 
        q: term
      }
    })

    this.setState({ videos: response.data.items })
  }

  //add another callback to be called when a video is selected
  onVideoSelect = video => {
    this.setState({ selectedVideo: video })
  }


  render() {

    return (
      <div className="ui container">
        <h1 className="ui violet header center aligned">veedeo.</h1>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
        onVideoSelect={this.onVideoSelect} 
        videos={this.state.videos} />
      </div>
    )
  }
} 


export default App;
