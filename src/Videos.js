import React from 'react';
import videos from './videos.json';
//var source = "https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com";

console.log("https://www.youtube.com/v/" + videos[0].snippet.resourceId.videoId)

function addVideo(source2) {
    var btn = document.createElement("iframe");     
    btn.src = source2;   
    btn.height = 225;
    btn.width = 400;          
    document.body.appendChild(btn);
    
  }

  for(let index = 0; index < 100; index++) {
    addVideo("https://www.youtube.com/embed/" + videos[index].snippet.resourceId.videoId)
  }

const Videos  = () =>(
    <div>
        <h2>Videos tab????</h2>

        <div>
            
        </div>
    </div>
)

export default Videos;