import React from 'react';
import Todos from './todos'
import Addtodo from './addform'
import './todo.css'

class Newapp extends React.Component{

    state = {
        todos: [
            
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