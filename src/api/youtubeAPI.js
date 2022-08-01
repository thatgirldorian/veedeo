import axios from 'axios';

//create an instance of the axios client with default properties
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: '5',
        key: `${process.env.REACT_APP_youtubeAPIKey}`
    }
})