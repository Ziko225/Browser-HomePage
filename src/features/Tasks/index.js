import { useSelector, useDispatch } from 'react-redux'
import { Main } from "../../common/Main"
import TaskBlock from "./TaskBlock"
import { Block } from "./styled"
import Form from './Form'

const Tasks = () => {
    const tasks = useSelector(({ tasks }) => tasks.tasks)
    const content = tasks.map(task => (<TaskBlock key={task.id}>{task.content}</TaskBlock>))
    return (
        <Main>
            <Block>
                <Form />
                {content}
            </Block>
        </Main>
    )
}

export default Tasks