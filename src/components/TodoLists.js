import React from 'react';
import styled, { css } from 'styled-components';
import { useTodoDispatch, useTodoState } from '../context/TodoContext';
import { MdDelete,MdDone } from "react-icons/md";
const Remove = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    cursor: pointer;
    font-size: 24px;
    &:hover {
        color: #ff6b6b;
    }
    display: none;
`;
const TodoListBlock = styled.div`
    padding: 20px 32px;
    flex: 1;
`;
const TodoItemBlock = styled.div`
    display: flex;
    padding-top: 12px;
    padding-bottom: 12px;
    align-items: center;
    height: 50px;  
    &:hover {
        ${Remove} {
            display:inline-block;
        }
    }
`;
const CheckCircle = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid #ced4da;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    ${props=>
        props.done && 
        css`
            border:1px solid #38d9a9;
            color: #38d9a9;
        `
    }
`;
const TodoLists = () => {
    const todos = useTodoState();
    const dispatch = useTodoDispatch();
    const removeTodo = (id) => {
        dispatch({
            type:'REMOVE',
            id:id  
        })
    }
    const toggleTodo = (id) => {
        dispatch({
            type: 'TOGGLE',
            id: id
        })
    }
    return (
        <TodoListBlock>
            {todos.map(todo=><TodoItemBlock key={todo.id}>
            <CheckCircle onClick={()=>{toggleTodo(todo.id)}}>{todo.done && <MdDone/>}</CheckCircle>
            <span>{todo.text}</span>
            <Remove onClick={()=>{removeTodo(todo.id)}}><MdDelete/>
            </Remove></TodoItemBlock>)}
        </TodoListBlock>
    );
};

export default TodoLists;