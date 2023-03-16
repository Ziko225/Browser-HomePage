import { Content, InputBox, StyledInput, StyledSearchIco } from "./styled";

const Search = () => {
    return (
        <Content>
            <form action="https://www.google.com/search" method="get">
                <InputBox><StyledSearchIco /><StyledInput placeholder="Search with google" type="search" name="q" /></InputBox>
            </form>
        </Content>
    );
};

export default Search;