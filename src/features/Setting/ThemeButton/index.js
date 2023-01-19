import { useState } from "react";
import { StyledThemeIco, ThemeCaption, ThemeContainer, ThemeSwitcher } from "./styled";


const ThemeButton = () => {
    const [a, setA] = useState(false)

    return (
        <ThemeContainer>
            <ThemeCaption >DARK MODE</ThemeCaption>
            <ThemeSwitcher onClick={() => setA(!a)}><StyledThemeIco mode={a} /></ThemeSwitcher>
        </ThemeContainer>
    )
};

export default ThemeButton;