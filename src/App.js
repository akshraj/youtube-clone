import React, { Component } from 'react';
import _ from 'lodash';
import SearchBar from './components/search_text';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetails';
import YTsearch from 'youtube-api-search';
const API = "AIzaSyDV1mlXwJXT5emSlxSSEr_5T6f7r7_-vlI";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      videos:[],
      selectedVideo:null
    }
    this.videoSearch('react js')
  }
  videoSearch = (term)=>{
      YTsearch({key:API , term:term},(videos)=>{
        this.setState({
          videos:videos,
          selectedVideo:videos[0]
        })
      })
    }
  render(){
    const searchVideo = _.debounce(term=>{this.videoSearch(term)},300)
    return(
      <div>
        <SearchBar onSearchTermChange={searchVideo} />
          <div className="row">
            <VideoDetail video={this.state.selectedVideo}/>
              <VideoList
                onSelectVideo = {selectedVideo=>this.setState({selectedVideo})}
                videos={this.state.videos}/>
            </div>
      </div>
    )
  }
}

export default App;
