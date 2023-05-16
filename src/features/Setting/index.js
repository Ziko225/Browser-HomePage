import { OpenBarButton, Content, Titile, SettingBlock, StyledInput, StyledButton, HeaderBlock, StyledForm } from "./styled";
import { ReactComponent as SettingIco } from './settingIco.svg';
import { useEffect } from "react";
import { useRef } from "react";
import ThemeButton from "./ThemeButton";
import useToggle from "../../hooks/useToggle";
import { useState } from "react";

const Setting = ({ onThemeButtonClick, onBackgroundChange, isDarkTheme, onDefaultBackground }) => {
    const [openSettingBar, toggleOpenSettingBar, setOpenSettingBar] = useToggle();
    const wrapperRef = useRef(null);
    const [url, setUrl] = useState("");

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setOpenSettingBar(false);
            };
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    const changeBackgroundHandler = (e) => {
        e.preventDefault();

        if (!url) {
            return;
        };

        onBackgroundChange(url);
        setUrl("");
    };

    return (
        <Content ref={wrapperRef}>
            <OpenBarButton
                open={openSettingBar}
                onClick={toggleOpenSettingBar}>
                <SettingIco />
            </OpenBarButton>
            {openSettingBar &&
                <SettingBlock>
                    <HeaderBlock>
                        <Titile>Setting</Titile>
                        <ThemeButton isDarkTheme={isDarkTheme} onThemeButtonClick={onThemeButtonClick} />
                    </HeaderBlock>
                    <StyledForm onSubmit={(e) => changeBackgroundHandler(e)}>
                        Background url
                        <StyledInput
                            value={url}
                            onChange={(e) => setUrl(e.currentTarget.value)}
                            placeholder="Image url: (jpg / png)"
                        />
                        <StyledButton>Save</StyledButton>
                    </StyledForm>
                    <StyledButton setDefaultButton onClick={onDefaultBackground}>Set default</StyledButton>
                </SettingBlock>
            }
        </Content>
    );
};

export default Setting;