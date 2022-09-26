import { useDispatch, useSelector } from 'react-redux';
import { Block, TaskElement, Button } from "./styled";
import { removeTask } from './tasksSlice';
import Main from "../../common/Main";
import Section from '../../common/Section';
import Form from './Form';

const Tasks = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(({ tasks }) => tasks.tasks);
    const content = tasks.map(task => (
        <Section key={task.id}>
            <TaskElement >
                <Button onClick={() => dispatch(removeTask(task.id))}>x</Button>
            </TaskElement>
            {task.content}
        </Section>
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

export default Tasks;