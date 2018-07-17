import _ from 'lodash';
import React from 'react';
import ToDosListHeader from './toDos-list-header';
import ToDosListItem from './toDosList-item';

export default class ToDosList extends React.Component {

    renderItems() {
        return _.map(this.props.toDos, (todo, index) => <ToDosListItem key={index} {...todo} />);
    };

    render() {
        return (
            <table>
                <ToDosListHeader/>
                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>

        );
    }
}