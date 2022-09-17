import { useDispatch, useSelector } from 'react-redux';
import { Block, TaskElement, Button } from "./styled";
import { removeTask } from './tasksSlice';
import Main from "../../common/Main";
import TaskBlock from "./TaskBlock";
import Form from './Form';

const Tasks = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(({ tasks }) => tasks.tasks);
    const content = tasks.map(task => (
        <TaskBlock key={task.id}>
            <TaskElement >
                <Button onClick={() => dispatch(removeTask(task.id))}>x</Button>
            </TaskElement>
            {task.content}
        </TaskBlock>
    ))

    return (
        <Main>
            <Block>
                <Form>
                    {Button}
                </Form>
                {content}
            </Block>
        </Main>
    )
};

export default Tasks