import React from 'react';
import Todos from './todos'
import Addtodo from './addform'

class Newapp extends React.Component{

    state = {
        todos: [
            {id: 1, content: 'Buy Some Milk'},
            {id: 2, content: 'Play Mario Kart'},
        ]
    }
    deleteTodo = (id) =>{
        const todos = this.state.todos.filter(todo => {
            return todo.id !== id
        })
        this.setState({
            todos
        })
    }
    addTodo = (todo) =>{
        todo.id = Math.random();
        let todos = [...this.state.todos, todo]
        this.setState({
            todos
        })
    }
    render(){
        return(
            <div className='todo-App container'>
                <h1 className="center teal-text">Todo-List</h1>
                <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
                <Addtodo addTodo={this.addTodo}/>
            </div>
        )
    }
}

export default Newapp