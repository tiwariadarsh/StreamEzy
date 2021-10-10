import axios from 'axios';

export const createStream = (apiKey,stream_name) => {
    // POST request using axios with set headers
    const params = JSON.stringify({
        "name": stream_name,
        "profiles": [
          {
            "name": "720p",
            "bitrate": 2000000,
            "fps": 30,
            "width": 1280,
            "height": 720
          },
          {
            "name": "480p",
            "bitrate": 1000000,
            "fps": 30,
            "width": 854,
            "height": 480
          },
          {
            "name": "360p",
            "bitrate": 500000,
            "fps": 30,
            "width": 640,
            "height": 360
          }
        ]
    })
    const headers = { 
        'content-type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
    };
    axios.post('https://livepeer.com/api/stream', params, { headers })
        .then(response => console.log(response.data))
        .catch(error=>console.log(error.message))
}