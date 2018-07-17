import React from 'react';

export default class CreateToDo extends React.Component {
    render() {
        return (
           <form>
           <input type="text" placeholder="What do I need to do?"/>
               <button>CREATE</button>
           </form>

        );
    }
}