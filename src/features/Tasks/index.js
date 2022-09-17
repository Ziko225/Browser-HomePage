import { Main } from "../../common/Main"
import TaskBlock from "./TaskBlock"
import { Input, Block } from "./styled"

const Tasks = () => {
    return (
        <Main>
            <Block>
                <Input placeholder="Any tasks?" />
                <TaskBlock>Lorem ipsum dol cos cos</TaskBlock>
                <TaskBlock>lorem ipsum dol lorem ipsum dol lorem ipsum dol</TaskBlock>
                <TaskBlock>lorem ipsum dol lorem ipsum dol lorem ipsum dol</TaskBlock>
                <TaskBlock>lorem ipsum dol lorem ipsum dol lorem ipsum dol</TaskBlock>
                <TaskBlock>lorem ipsum dol lorem ipsum dol lorem ipsum dol</TaskBlock>
                <TaskBlock>lorem ipsum dol lorem ipsum dol lorem ipsum dol</TaskBlock>
                <TaskBlock>lorem ipsum dol lorem ipsum dol lorem ipsum dol</TaskBlock>
                <TaskBlock>lorem ipsum dol lorem ipsum dol lorem ipsum dol</TaskBlock>
            </Block>
        </Main>
    )
}

export default Tasks