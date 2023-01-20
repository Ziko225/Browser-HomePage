import { Content, InputBox, StyledInput, StyledSearchIco } from "./styled";

const Search = () => {
    return (
        <Content>
            <form action="http://www.google.com/search" method="get">
                <InputBox><StyledSearchIco /><StyledInput placeholder="Search with google" type="text" name="q" /></InputBox>
            </form>
        </Content>
    );
};

export default Search;