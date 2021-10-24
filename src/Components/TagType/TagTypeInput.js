import React, { Component } from 'react';
import axios from 'axios';

class TagTypeInput extends Component {
    state = {
        type: ''
    };

    handleInput = (event, property) => {
        this.setState({
            ...this.state,
            [property]: event.target.value
        })
    };
    
    handleSubmit = event => {
        event.preventDefault();
        axios.post('/tagType', this.state)
            .then((response) => {
                window.location.reload();
                // this.setState({
                //     ...this.state,
                //     types: response.data
                // })
            })
    };

    handleKeyUp = key => {
        if (key.key === 'Enter') {
            this.handleSubmit();
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="tag-type">Tag Type: </label>
                <input id="tag-type" className="text-input" name="text-input" title="Tag Type" placeholder="" value={this.state.type} type="text" required onChange={event => {
                    this.handleInput(event, 'type');
                }} onKeyUp={this.handleKeyUp}></input>
                <button id="add-tag-type" className="button-primary" type="submit">Add</button>
            </form>
        )
    }
}

export default TagTypeInput;