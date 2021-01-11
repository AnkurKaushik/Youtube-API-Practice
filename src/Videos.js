import React from 'react';
import Vid from './Vid'
import NamesContainer from './NamesContainer';



class Videos extends React.Component{
    state = {
        videoM: Vid,
        searchTerm: ''
    }
    
    editSearchTerm = (e) => {
        this.setState({searchTerm: e.target.value})
    }
    
    dynamicSearch = () => {
        //return this.state.title.filter(title => title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
        return this.state.videoM.filter(vidname => vidname[0].toLowerCase().includes(this.state.searchTerm.toLowerCase())).map(function(value, index) {return value[1]});
    }

    render(){
        return(
            <div style={{textAlign: 'center', paddingTop: '30vh'}}>
                <input size='lg' type="text" className="input" value={this.state.searchTerm} onChange={this.editSearchTerm} placeholder="Search..." />
                <br></br>
                <h3>The Videos:</h3>

                <NamesContainer names = {this.dynamicSearch()}/>
            </div>
        )
    }
}


export default Videos;

