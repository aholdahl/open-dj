import React, { Component } from 'react';
import axios from 'axios';

class TagTypeTableRow extends Component {
    state = {
        id: 0,
        type: '',
        editMode: false
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            id: this.props.id,
            type: this.props.type
        })
    }

    toggleEditMode = () => {
        this.setState({
            ...this.state,
            editMode: !this.state.editMode
        })
    };

    handleInput = (event, property) => {
        this.setState({
            ...this.state,
            [property]: event.target.value
        })
    };

    handleSubmit = event => {
        event.preventDefault();
        alert(`submitting: ${this.state.type}`)
        this.toggleEditMode();
        axios.put('/tagType', this.state)
            .then((response) => {
                window.location.reload();
                // this.setState({
                //     ...this.state,
                //     types: response.data
                // })
            })
    };

    handleDelete = () => {
        alert(`deleting: ${this.state.type}`)
        axios.delete(`/tagType/${this.state.id}`)
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
            this.handleSaveChanges();
        }
    };

    render() {
        return (
            <>
                {this.state.editMode ?
                    <tr>
                        <td>
                            <input id="tag-type" className="text-input" name="text-input" title="Tag Type" placeholder="" value={this.state.type} type="text" required onChange={event => { this.handleInput(event, 'type'); }} onKeyUp={this.handleKeyUp}></input></td>
                        <td><button id="edit-tag-type" className="button-primary" onClick={this.handleSubmit}>Save</button></td>
                        <td><button id="delete-tag-type" className="button-secondary" onClick={this.handleDelete}>Delete</button></td>
                    </tr>
                    :
                    <tr>
                        <td>{this.props.type}</td>
                        <td><button id="edit-tag-type" className="button-primary" onClick={this.toggleEditMode}>Edit</button></td>
                        <td><button id="delete-tag-type" className="button-secondary" onClick={this.handleDelete}>Delete</button></td>
                    </tr>
                }
            </>
        )
    }
}

export default TagTypeTableRow;