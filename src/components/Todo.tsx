import React, { Fragment } from 'react';

export interface ITodo {
    text: string;
    done: boolean;
}

interface ITodoProps {
    // todo: { text: string, done: boolean }
    todo: ITodo
    changeTodoDone: (text: string) => void;
}

interface ITodoState {
    done: boolean;
}

class Todo extends React.Component<ITodoProps, ITodoState> {
    render() {
        return (
            <Fragment>
                <li>Todo : {this.props.todo.text}, Done : {this.props.todo.done.toString()} </li>
                <button onClick={(_e) => this.props.changeTodoDone(this.props.todo.text)}>C'est fait</button>
            </Fragment>
        )
    }
}

export default Todo;