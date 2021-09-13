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
        console.log(response.data);
        this.setState({
            songsFromApi: response.data
        })
    }

    render() { 
        return ( 
            <div>
                <h1><tr><th>Song Title</th><th>Album</th><th>Artist</th><th>Genre</th><th>Release Date</th></tr></h1>
                <hr/>
                {this.state.songsFromApi.map(song => {
                    return <table>
                        <tr><th>{song.title}</th><th>{song.album}</th><th>{song.artist}</th><th>{song.genre}</th><th>{song.release_date}</th></tr>
                    </table>
                })}
            </div>
         );
    }
}
 
export default App;