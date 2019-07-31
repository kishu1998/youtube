import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchBar from './component/search_bar';
import YTsearch from 'youtube-api-search';
import VideoList from './component/video_list';
import VideoDetail from './component/video_detail'
import * as serviceWorker from './serviceWorker';
import _ from 'lodash';

const API_KEY='AIzaSyANbj86Ny-CxZIMSIpr4kzsp7qMvv9CTNM';
class App extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            videos:[],
            selectedVideo:null
        }
       this.videoSearch('surfboards');
       
       console.log(this.props.name);
    }
    videoSearch(term)
    {
        
        YTsearch({key:API_KEY,term:term},(videos)=>{this.setState({videos:videos,selectedVideo:videos[0]});});
    }
    render()
    {
        //
        const videoSearch=_.debounce((term)=>this.videoSearch(term),300);
        return (<div>
            <SearchBar onSearchTermChange={videoSearch}></SearchBar>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList onVideoSelect={(selectedVideo)=>this.setState({selectedVideo:selectedVideo})} videos={this.state.videos}/>
            </div>)
    }
}

ReactDOM.render(<App name='abc' />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
