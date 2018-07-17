import React from 'react';

export default class CreateToDo extends React.Component {
    render() {
        return (
           <form onSubmit={this.handleCreate.bind(this)}>
           <input type="text" placeholder="What do I need to do?" ref="createInput"/>
               <button>CREATE</button>
           </form>

        );
    }

    handleCreate(event) {

        event.preventDefault();

        console.log(this.refs.createInput.value);
    }

}