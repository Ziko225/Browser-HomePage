import { useDispatch, useSelector } from 'react-redux';
import { Block, TaskElement, Button, ContentBlock } from "./styled";
import { removeTask } from './tasksSlice';
import Form from './Form';

const Tasks = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(({ tasks }) => tasks.tasks);
    const content = tasks.map(task => (
        <ContentBlock key={task.id}>
            <TaskElement >
                <Button onClick={() => dispatch(removeTask(task.id))}>x</Button>
            </TaskElement>
            {task.content}
        </ContentBlock>
    ))

    return (
        <Block>
            <Form>
                {Button}
            </Form>
            {content}
        </Block>
    )
};

export default Tasks;