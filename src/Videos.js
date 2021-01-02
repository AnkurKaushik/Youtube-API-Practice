import React from 'react';
import Vid from './Vid';

//var source = "https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com";
//const s = ['CUwDZLhnfes', 'w_cJYKM7J2Q'];
const videoArry = []

const key = "https://www.youtube.com/embed/";
for (const [index, value] of Vid.entries()) {
    videoArry.push(<li key={index}>{value}</li>)
    videoArry.push(<iframe title={value} src={key + value} height="225" width="400"></iframe>)
}

const Videos  = () =>(
    <div>
        <h2>Videos tab</h2>
        <input type="text" className="input" placeholder="Search..." />
        <div> </div>
        {videoArry}
    </div>
)


export default Videos;

