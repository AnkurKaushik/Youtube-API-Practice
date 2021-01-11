import React from 'react';
import videos from './videos.json';

const vids = []
const titles = []

//this function is now obsolete since we can just add iframes to an array
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
    titles.push(videos[index].snippet.title);
} 

const vidArry = Array(100).fill().map(()=>Array(2).fill())

const key = "https://www.youtube.com/embed/";
for (const [index, value] of vids.entries()) {
    vidArry[index][0] = titles[index]
    vidArry[index][1] = <iframe title={titles[index]} src={key + value} height="225" width="400"></iframe>
}

export default vidArry; 
