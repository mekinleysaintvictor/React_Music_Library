import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            songsFromApi: []
         }
    }

    componentDidMount(){
        this.getSongs();
    }

    async getSongs(){
        let response = await axios.get('http://127.0.0.1:8000/music/');
        console.log(response.data[0].album);
        this.setState({
            songsFromApi: response.data
        })
    }

    render() { 
        return ( 
            <div>
                <h1>Hello World</h1>
                <hr/>
    
            </div>
         );
    }
}
 
export default App;