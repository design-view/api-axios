import React, { useState } from 'react';
import { useTodoDispatch, useTodoNextId } from '../context/TodoContext';

const TodoCreate = () => {
    const [value,setValue] = useState("");
    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();
    const addTodo = () => {
        dispatch({
            type: 'CREATE',
            todo: {
                id: nextId.current,
                text: value,
                done: false
            }
        })
        setValue("");
        nextId.current += 1;
    }
    return (
        <div>
            <input value={value} onChange={(e)=>{
                setValue(e.target.value)
            }}/>
            <button onClick={addTodo}>+</button>
        </div>
    );
};

export default TodoCreate;