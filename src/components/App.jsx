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

    handleDelete(id, e){
        axios.delete(`http://127.0.0.1:8000/music/${id}/`).then(res => {
            console.log(res);
            console.log(res.data);

            const songs = this.state.songsFromApi.filter(song => song.id !== id);
            this.setState({
                songs
            });
        })
    }

    render() { 
        return ( 
            <div>
                <h1><tr><th>Song Title</th><th>Album</th><th>Artist</th><th>Genre</th><th>Release Date</th></tr></h1>
                <hr/>
                {this.state.songsFromApi.map(song => {
                    return <table>
                        <tr>
                            <th>{song.title}</th><th>{song.album}</th><th>{song.artist}</th><th>{song.genre}</th><th>{song.release_date}</th>
                            <th><button type="button" onClick={(e) => this.handleDelete(song.id, e)}>Delete</button></th>
                        </tr>
                    </table>
                })}
            </div>
         );
    }
}
 
export default App;