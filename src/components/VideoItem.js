import React from 'react';
import './videoItem.css'

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div onClick={ () => onVideoSelect(video) } className="item video-item">
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
            <div className="content">
            <p className="header title-link" >{video.snippet.title}</p>
            <div className="description">{video.snippet.channelTitle}</div>
            </div>
        </div>
    )
}

export default VideoItem;