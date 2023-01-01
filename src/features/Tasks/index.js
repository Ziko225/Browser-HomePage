import { Block, TaskElement, StyledButton, ContentBlock, StyledInput } from "./styled";
import { useState } from 'react';
import { getTasksFromLocalStorage, setTasksInLocalStorage } from "./tasksLocalStorage";
import { useEffect } from "react";

const Tasks = () => {
    const [tasks, setTasks] = useState(getTasksFromLocalStorage());
    const [name, setName] = useState("");

    useEffect(() => {
        setTasksInLocalStorage(tasks);
    }, [tasks])

    const addTask = (e) => {
        e.preventDefault();
        if (name.length > 0) {
            setTasks([...tasks, name]);
            setName("");
        };
    };

    const removeTask = (index) => {
        setTasks([
            ...tasks.slice(0, index),
            ...tasks.slice(index + 1),
        ]);
    };

    const content = tasks.map((task, index) => (
        <ContentBlock key={index}>
            <TaskElement >
                <StyledButton onClick={() => removeTask(index)}>x</StyledButton>
            </TaskElement>
            {task}
        </ContentBlock>
    ));

    return (
        <>
            <form onSubmit={addTask}>
                <StyledInput onChange={(e) => setName(e.currentTarget.value)} value={name} placeholder="Any note?"></StyledInput>
            </form>
            <Block>
                {content}
            </Block>
        </>
    )
};

export default Tasks;