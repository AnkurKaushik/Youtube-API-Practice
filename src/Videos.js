import React from 'react';
import videos from './videos.json';
//var source = "https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com";

console.log("https://www.youtube.com/v/" + videos[0].snippet.resourceId.videoId)

function addVideo(source2) {
    var btn = document.createElement("iframe");     
    btn.src = source2;   
    btn.height = 281;
    btn.width = 500;          
    document.body.appendChild(btn);
    
  }

const Videos  = () =>(
    <div>
        <h2>Videos tab????</h2>

        <div>
            {addVideo("https://www.youtube.com/embed/" + videos[0].snippet.resourceId.videoId)}
            {addVideo("https://www.youtube.com/embed/" + videos[1].snippet.resourceId.videoId)}
            {addVideo("https://www.youtube.com/embed/" + videos[2].snippet.resourceId.videoId)}
        </div>
    </div>
)

export default Videos;