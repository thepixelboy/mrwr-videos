import axios from 'axios';

const KEY = 'AIzaSyC1q08sEH1Wo-FQeu08jR27Vy9onJTUjS8';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: `${KEY}`
  }
});
