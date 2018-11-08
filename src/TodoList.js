import React, { Component } from "react";
import styled from 'styled-components';
import TodoTasks from "./TodoTasks";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };

        this.addTask = this.addTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    addTask(task) {
        if (this.inputTasks.value){

            var newTask = {
                text: this.inputTasks.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return{
                    tasks: prevState.tasks.concat(newTask)
            };
        });

        this.inputTasks.value = "";
        }
        console.log(this.state.tasks);
        task.preventDefault();
    }

    deleteTask(key) {
        var newTasks = this.state.tasks.filter(function (task){
            return (task.key !== key);
        });
        this.setState({
            tasks: newTasks
        });

    }

    render() {
        return (
            <>
               <Title>Todo list</Title>
                    <form onSubmit={this.addTask}>
                        <Input ref={(a) => this.inputTasks = a}
                        placeholder="enter task"/>
                        <Button type="submit">
                            add
                        </Button>
                    </form>
                <TodoTasks entries={this.state.tasks}
                           delete={this.deleteTask}/>         
            </>
        );
    }
}

const Title = styled.h1`
    padding: 10px;
    font-size: 40px;
    font-style: italic;
    color: black;
`;

const Input = styled.input`
    padding: 10px;
    font-size: 16px;
    border: 2px solid #FFF;
    width: 165px;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 16px;
    margin: 10px;
    margin-right: 0px;
    background-color: #0066FF;
    color: #FFF;
    border: 2px solid #0066FF;
`;

export default TodoList;