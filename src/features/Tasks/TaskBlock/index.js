import { ContentBlock } from "./styled";

const TaskBlock = ({ children, buttonTask }) => {
    return (
        <ContentBlock>
            {children}
        </ContentBlock>
    )
};

export default TaskBlock;