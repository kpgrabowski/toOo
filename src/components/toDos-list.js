import React from 'react';
import ToDosListHeader from './toDos-list-header';

export default class ToDosList extends React.Component {
    render() {
        return (
            <table>
                <ToDosListHeader/>
            </table>

        );
    }
}