import React from 'react';
import VideoListItem from './videoListItem';

const VideoList = (props)=>{
  const videoList = props.videos.map(video=>{
    return <VideoListItem onVideoSelect={props.onSelectVideo} video={video} key={video.etag}/>
  })
  return(
    <ul className="col-md-4">
      {videoList}
    </ul>
  )
}

export default VideoList;
