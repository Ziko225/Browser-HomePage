import { Block, TaskElement, StyledButton, ContentBlock, StyledInput } from "./styled";
import { useState } from 'react';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const [name, setName] = useState("");

    const addTask = (e) => {
        e.preventDefault();
        setTasks([...tasks, name]);
        setName("");
    };

    const removeTask = (index) => {
        setTasks([
            ...tasks.slice(0, index),
            ...tasks.slice(index + 1),
        ]);
    };

    const content = tasks.map((task, index) => (
        <ContentBlock>
            <TaskElement >
                <StyledButton onClick={() => removeTask(index)}>x</StyledButton>
            </TaskElement>
            {task}
        </ContentBlock>
    ))

    return (
        <>
            <form onSubmit={addTask}>
                <StyledInput onChange={(e) => setName(e.currentTarget.value)} value={name} placeholder="Any task?"></StyledInput>
            </form>
            <Block>

                {content}
            </Block>
        </>
    )
};

export default Tasks;