import { ContentBlock } from "./styled"
import { Block, Button } from "./styled"

const TaskBlock = ({ children }) => {
    return (

        <ContentBlock>
            <Block>
                <Button>x</Button>
            </Block>
            {children}
        </ContentBlock>
    )
}

export default TaskBlock