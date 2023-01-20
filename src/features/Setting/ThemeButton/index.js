import { useEffect, useState } from "react";
import { StyledThemeIco, ThemeCaption, ThemeContainer, ThemeSwitcher } from "./styled";

const ThemeButton = () => {
    const darkThemeId = "isDarkTheme";
    const [isDarkTheme, setIsDarkTheme] = useState(JSON.parse(localStorage.getItem(darkThemeId) || false));
    const [isToggled, setIsToggled] = useState(false);

    const toggleTheme = () => {
        if (!isToggled) {
            setIsToggled(true);
            setIsDarkTheme(!isDarkTheme);
            setInterval(() => {
                document.location.reload();
            }, 400);
        }
    };

    useEffect(() => {
        localStorage.setItem(darkThemeId, JSON.stringify(isDarkTheme));
    }, [isDarkTheme]);

    return (
        <ThemeContainer>
            <ThemeCaption >DARK MODE</ThemeCaption>
            <ThemeSwitcher onClick={() => toggleTheme()}><StyledThemeIco $darkTheme={isDarkTheme} /></ThemeSwitcher>
        </ThemeContainer>
    );
};

export default ThemeButton;