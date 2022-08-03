import React from "react";
import SearchBar from './SearchBar'
import youtubeApi from "../api/youtubeAPI"
import VideoList from '../components/VideoList'
import VideoDetail from "../components/VideoDetail"
import './App.css'

class App extends React.Component {
  //initialize state
  state = { videos: [], selectedVideo: null } 

  //create some default behavior on load
  componentDidMount() {
    this.onTermSubmit('sff books')
  }

  //add a callback to be called every time a search query is submitted
  onTermSubmit = async (term) => {
    const response = await youtubeApi.get('/search', {
      params: { 
        q: term
      }
    })

    this.setState({ 
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })
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
        <div className="ui stackable grid">
          <div className="ui row">
              <div className="eleven wide column">
                  <VideoDetail video={this.state.selectedVideo} />
              </div>
              <div className="five wide column">
                  <VideoList 
                    onVideoSelect={this.onVideoSelect} 
                    videos={this.state.videos} />
              </div>
          </div>
        </div>
      </div>
    )
  }
} 


export default App;
