import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTask } from "../tasksSlice";
import { Block, Input } from "./styled";
import { nanoid } from '@reduxjs/toolkit';

const Form = () => {
    const dispatch = useDispatch();
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent.trim() === "") {
            return
        }

        dispatch(addTask(
            {
                content: newTaskContent.trim(),
                id: nanoid(),
            }));

        setNewTaskContent("");
    };

    return (
        <Block onSubmit={onFormSubmit}>
            <Input value={newTaskContent} onChange={({ target }) => setNewTaskContent(target.value)} placeholder="Any task?"></Input>
        </Block>
    )
};

export default Form;