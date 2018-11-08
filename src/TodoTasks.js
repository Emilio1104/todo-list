import React, { Component } from "react";
import FlipMove from "react-flip-move";
import styled from "styled-components";

class TodoTasks extends Component {
    constructor(props) {
        super(props);
        this.createTasks = this.createTasks.bind(this);
    }

    delete(key) {
        this.props.delete(key);
    }
    createTasks(task) {
        return (
        <Task onClick={() => this.delete(task.key)} key={task.key}>
            {task.text}
        </Task>
        );
    }

    render(){
        var todoInputs = this.props.entries;
        var taskList = todoInputs.map(this.createTasks);

        return (
            <Tasklist>
                <FlipMove duration={300} easing="ease-out">
                    {taskList}
                </FlipMove>
            </Tasklist>
        );
    }
};
const Tasklist = styled.ul`
    list-style: none;
    padding-left: 0;
    width: 250px;
`;
const Task = styled.li`
    color: rgb(1, 22, 49);
    background-color: rgba(240, 20, 20, 0.5);
    padding: 15px;
    margin-bottom: 15px;
    border-radius: 5px;
    
    transition: background-color .2s ease-out;

    &:hover {
        background-color: rgb(96, 253, 5);
        cursor: pointer;
    }
`;


export default TodoTasks;