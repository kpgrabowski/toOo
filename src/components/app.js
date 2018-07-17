import React from 'react';
import ToDosList from './toDos-list';
import CreateToDo from'./create-toDo';

const toDos = [
    {
        task: 'make something for your fun',
        isCompleted: false,
},
{
    task: 'xxx your dinner',
        isCompleted: true,
},
];

export default class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            toDos
        };
    }

    render() {
        return (
            <div>
                <h1>Welcome here!!!</h1>
                <CreateToDo/>
                <ToDosList toDos={this.state.toDos}/>
            </div>

        );
    }
}