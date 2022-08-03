import React from 'react';
import './videoItem.css'

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div onClick={ () => onVideoSelect(video) } className="item video-item">
            <img className="ui image" src={video.snippet.thumbnails.medium.url} />
            <div className="content">
            <a className="header" >{video.snippet.title}</a>
            <div className="description">{video.snippet.description}</div>
            </div>
        </div>
    )
}

export default VideoItem;