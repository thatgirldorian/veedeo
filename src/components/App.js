import React from "react";
import SearchBar from './SearchBar'

class App extends React.Component {
  //initialize state 
  state = {term: ''}

  render() {

    return (
      <div className="ui container">
        <SearchBar />
      </div>
      
      
    )
  }
} 


export default App;
