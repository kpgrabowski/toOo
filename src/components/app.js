import React from 'react';
import ToDosList from './toDos-list';

const toDos = [
    {
        task: 'make something for your fun',
        isCompleted: false,
},
{
    task: 'preper you dinner',
        isCompleted: true,
},
];

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome here!!!</h1>
                <ToDosList/>
            </div>

        );
    }
}