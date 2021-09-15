import React, { Component } from 'react';
import SongForm from './SongForm/SongForm';
import './App.css';
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

    handleDelete(id){
        axios.delete(`http://127.0.0.1:8000/music/${id}/`).then(res => {
            console.log(res);
            console.log(res.data);

            const songs = this.state.songsFromApi.filter(song => song.id !== id);
            this.setState({
                songsFromApi: songs
            });
        })
    }

    render() { 
        return ( 
            <div>
                <h1 class="header">Saint Victor Music Library</h1>
                <hr/>
                <table class="table">
                    <thead class="table-header">
                        <tr>
                            <th>Song Title</th>
                            <th>Album</th>
                            <th>Artist</th>
                            <th>Genre</th>
                            <th>Release Date</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody class="table-body">
                        {this.state.songsFromApi.map(song => {
                            return (
                                <tr>
                                    <td>{song.title}</td>
                                    <td>{song.album}</td>
                                    <td>{song.artist}</td>
                                    <td>{song.genre}</td>
                                    <td>{song.release_date}</td>
                                    <td><button type="button" onClick={() => this.handleDelete(song.id)}>Delete</button></td>
                                </tr>
                            );
                            
                        })}
                    </tbody>                 
                </table>
                <SongForm addSong={this.addSongs} getSong={() => this.getSongs()}/>
            </div>
         );
    }
}
 
export default App;