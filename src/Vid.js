//import React from 'react';
import videos from './videos.json';

const vids = []


/* function addVideo(source2) {
    var vid = document.createElement("iframe");     
    vid.src = source2;   
    vid.height = 225;
    vid.width = 400;          
    document.body.appendChild(vid);
} */


for(let index = 0; index < 100; index++) {
    //addVideo("https://www.youtube.com/embed/" + videos[index].snippet.resourceId.videoId)
    vids.push(videos[index].snippet.resourceId.videoId);
} 

export default vids;