import { Block, TaskElement, StyledButton, ContentBlock, StyledInput } from "./styled";
import { getTasksFromLocalStorage, setTasksInLocalStorage } from "./tasksLocalStorage";
import { useState, useEffect } from "react";

const Notes = () => {
    const [tasks, setTasks] = useState(getTasksFromLocalStorage());
    const [name, setName] = useState("");

    useEffect(() => {
        setTasksInLocalStorage(tasks);
    }, [tasks]);

    const addTask = (e) => {
        e.preventDefault();
        if (name.trim().length) {
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

    return (
        <>
            <form onSubmit={addTask}>
                <StyledInput onChange={(e) => setName(e.currentTarget.value)} value={name} placeholder="Any note?"></StyledInput>
            </form>
            <Block>
                {tasks.map((task, index) => (
                    <ContentBlock key={index}>
                        <TaskElement >
                            <StyledButton onClick={() => removeTask(index)}>x</StyledButton>
                        </TaskElement>
                        {task}
                    </ContentBlock>
                ))}
            </Block>
        </>
    )
};

export default Notes;