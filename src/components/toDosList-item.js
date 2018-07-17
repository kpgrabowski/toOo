import React from 'react';

export default class ToDosListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false,
        };
    }

    renderActionSection() {
        if (this.state.isEditing) {
            return (
                <td>
                    <button>SAVE</button>
                    <button onClick={this.onCancelClick.bind(this)}>CANCEL</button>
                </td>
            );
        }
        return (
            <td>
                <button onClick={this.onEditClick.bind(this)}>EDIT</button>
                <button>DELETE</button>
            </td>
        );
    };

        render()
        {
            return (
                <tr>
                    <td>{this.props.task}</td>
                    <td>
                        {this.renderActionSection()}
                    </td>
                </tr>

            );
        }

        onEditClick() {
            this.setState({isEditing: true})
        };

    onCancelClick() {
            this.setState({isEditing: false})
        };



    }