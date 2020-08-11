import React from 'react';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.storeKey = props.storeKey;
        this.todoInput = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {};

    }

    componentDidMount() {
        if (window.localStorage.hasOwnProperty(this.storeKey)) {
            this.setState({ todos: JSON.parse(window.localStorage[this.storeKey]) })
        } else {
            this.setState({ todos: [] })
        }


    }

    componentDidUpdate() {
        window.localStorage.setItem(this.storeKey, JSON.stringify(this.state.todos))
    }

    handleSubmit() {
        const new_todos = [...this.state.todos, this.todoInput.current.value];
        this.setState({ todos: new_todos });
        this.todoInput.current.value = "";
    }


    render() {
        return (
            <div>
                <textarea ref={this.todoInput} placeholder="What do you need to do today..."></textarea>
                <button onClick={this.handleSubmit}>Submit</button>
                <ul>
                    {(this.state.todos || []).map((todo, i) => <li key={i}>{todo}</li>)}
                </ul>
            </div>
        );
    }
}

export default TodoList;