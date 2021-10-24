import React, { Component } from 'react';
import axios from 'axios';
import TagTypeTableRow from './TagTypeTableRow';

class TagTypeTable extends Component {
    state = {
        types: []
    }

    componentDidMount() {
        this.handleGetTagTypes()
    }

    handleGetTagTypes = () => {
        axios.get('/tagType')
            .then((response) => {
                this.setState({
                    ...this.state,
                    types: response.data
                })
            })
    };

    render() {
        const renderTagTypeTableRows = this.state.types.map((type) => {
            return (<TagTypeTableRow key={type.id} id={type.id} type={type.type} />)
        })
        return (
            <table id="tag-type-table" className="table">
                <thead id="tag-type-table-head" className="tablehead">
                    <tr className="table-row">
                        <th className="table-head-cell">Tag Type</th>
                        <th className="table-head-cell">Edit</th>
                        <th className="table-head-cell">Delete</th>
                    </tr>
                </thead>
                <tbody id="tag-type-table-body" className="tablebody">
                    {renderTagTypeTableRows}
                </tbody>
                <tfoot id="tag-type-table-foot" className="tablefoot">

                </tfoot>
            </table>
        )
    }
}

export default TagTypeTable;