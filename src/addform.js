import React from 'react';

class  Addtodo extends React.Component{
    state ={
        content: ''
    }
    handleChange = (e) =>{
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add New ToDo:</label>
                    <input type='text' onChange={this.handleChange} value={this.state.content}/>
                    <label>Tap on ToDo text to delete</label>
                </form>
            </div>
        )
    }
}

export default Addtodo