import { useState } from "react";
import { useDispatch } from 'react-redux'
import { addTask } from "../tasksSlice";
import { Block, Input } from "./styled"
import { nanoid } from '@reduxjs/toolkit'


const Form = () => {
    const dispatch = useDispatch()
    const [newTaskContent, setNewTaskContent] = useState("")

    const onFormSubmit = (event) => {

        event.preventDefault();
        dispatch(addTask(
            {
                content: newTaskContent,
                id: nanoid()
            }))

            setNewTaskContent("")
    }

    return (
        <Block onSubmit={onFormSubmit}>
            <Input value={newTaskContent} onChange={({ target }) => setNewTaskContent(target.value)} placeholder="Any task?"></Input>
        </Block>
    )
}

export default Form