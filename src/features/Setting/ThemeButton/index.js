import { useDispatch, useSelector } from "react-redux";
import { StyledThemeIco, ThemeCaption, ThemeContainer, ThemeSwitcher } from "./styled";
import { selectIsDarkTheme, toggleTheme } from "./themeSlice";

const ThemeButton = () => {
    const dispath = useDispatch();
    const theme = useSelector(selectIsDarkTheme);

    return (
        <ThemeContainer>
            <ThemeCaption >DARK MODE</ThemeCaption>
            <ThemeSwitcher onClick={() => dispath(toggleTheme())}><StyledThemeIco $darkTheme={theme} /></ThemeSwitcher>
        </ThemeContainer>
    );
};

export default ThemeButton;