import React from 'react'
import './todo.css'

const Todos = ({todos, deleteTodo}) =>{
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span onClick = {() =>{deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className='text'>You have no todo's left, yay!</p>
    )

    return(
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos