import React, { Component, FormEvent, Fragment } from 'react';
import Todo, { ITodo } from "./Todo";

interface ITodoListState {
    todos: ITodo[];
    newTodoInput: string;
}

class TodoList extends Component<{}, ITodoListState> {
    constructor(props: {}){
        super(props);
        
        // Todos in the state
        this.state = {
            newTodoInput: '',
            todos: [
                { text: 'Finir le jour 7', done: true},
                { text: 'Apprendre React', done: false},
                { text: 'Progresser grâce à RebootJS', done: false}
            ]
        }
    }

    // Submit form
    handleSubmit = (event: FormEvent) => {
        event.preventDefault(); /// no refresh

        // add todo
        this.setState({
            // todos: this.state.todos.push({
            todos: [
                ...this.state.todos,
                {
                    text: this.state.newTodoInput,
                    done: false
                }
            ]
        })
    }

    // Get the state of the input
    handleChange = (newTodoInput: string) => {
        this.setState({newTodoInput: newTodoInput})
    }

    changeTodoDone = (text: string) => {
        this.setState({
            // New todos table
            todos: this.state.todos.map(todo => {
                if(todo.text === text){
                return { ...todo, done: !todo.done}
            }
                return todo
            })
        })
    }
    
    render() {
        return (
            <Fragment>
                <form onSubmit={this.handleSubmit}>
                    <h2 className="label-wrapper">
                        <label htmlFor="new-todo-input" className="label__lg">
                            Hello Tony, you have {this.state.todos.length} Todos
                        </label>
                    </h2>
                    <input type="text" value={this.state.newTodoInput} onChange={(e) => this.handleChange(e.target.value)}/>
                    <input type="submit" value="Ajouter"/>
                </form>
                <ul>
                    {/* Parcourt chaque todo component */}
                    {this.state.todos.map((todo, index) => 
                        // <Todo key={index} todo={todo}/>
                        <Todo changeTodoDone={this.changeTodoDone} key={index} todo={todo} />
                    )}
                </ul>
            </Fragment>
        )
    }
}

export default TodoList;