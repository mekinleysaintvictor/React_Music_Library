import React, { Component } from 'react';
import './SongForm.css'
import axios from 'axios';

class SongForm extends Component {
    state = {
        title: '',
        album: '',
        artist: '',
        genre: '',
        release_date:''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        let response = axios.post('http://127.0.0.1:8000/music/', this.state)
        console.log(response.data);
    }

    render(){
        return(
            <form class="form col-lg-4 col-md-4 col-sm-12" onSubmit={(event) => this.handleSubmit(event)}>
                    <label class="button_label">Song Name</label>
                    <input type="text" name="title" onChange={this.handleChange} value={this.state.title} />
                    <label>Album</label>
                    <input type="text" name="album" onChange={this.handleChange} value={this.state.album}/>
                    <label>Artist</label>
                    <input type="text" name ="artist" onChange={this.handleChange} value={this.state.artist}/>
                    <label>Genre</label>
                    <input type="text" name ="genre" onChange={this.handleChange} value={this.state.genre}/>
                    <label>Release Date</label>
                    <input type="text" name="release_date" onChange={this.handleChange} value={this.state.release_date}/>
                    <button type="submit" onClick={() => this.props.getSong()}>Add Song</button>
                </form>
        )
    }
}

export default SongForm;