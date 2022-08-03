import React from 'react';
import VideoItem from './VideoItem'

const VideoList = ({ videos, onVideoSelect }) => {
    //map over the videoList array and return each videoItem
    const renderedVideoList = videos.map(video => { 
        return <VideoItem 
        key={video.id.videoId}
        video={video}
        onVideoSelect={onVideoSelect}
        />
    })

    return (
        <div className="ui relaxed divided list">
            {renderedVideoList}
        </div>
    )
}

export default VideoList