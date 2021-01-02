import React from 'react';
import Vid, { titleArry } from './Vid';
//const cpyTitle = titleArry;

const Videos  = () =>(
    <div>
        <h2>Videos tab</h2>
        <input type="text" className="input" placeholder="Search..." />
        <div> </div>
        {Vid}
    </div>
)


export default Videos;

