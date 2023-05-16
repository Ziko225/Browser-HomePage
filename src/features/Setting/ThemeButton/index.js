import { StyledThemeIco, Container, ThemeSwitcher } from "./styled";

const ThemeButton = ({ onThemeButtonClick, isDarkTheme }) => {
    return (
        <Container>
            <ThemeSwitcher onClick={onThemeButtonClick}><StyledThemeIco $darkTheme={isDarkTheme} /></ThemeSwitcher>
        </Container>
    );
};

export default ThemeButton;