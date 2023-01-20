import { OpenBarButton, Content, Titile, SettingBlock, StyledInput, FormBlock, StyledButton, ButtonBlock, HeaderBlock } from "./styled";
import { ReactComponent as SettingIco } from './settingIco.svg';
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import ThemeButton from "./ThemeButton";

const Setting = () => {
    const [openSettingBar, setOpenSettingBar] = useState();
    const wrapperRef = useRef(null);
    const [link, setLink] = useState("");

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

    const changeBackground = (event) => {
        event.preventDefault();
        if (link.length > 5) {
            localStorage.setItem("bglink", link);
            setTimeout(() => {
                document.location.reload()
            }, 300);
        }
    };

    const clearBackground = () => {
        localStorage.setItem("bglink", "")
        setTimeout(() => {
            document.location.reload()
        }, 300);
    };

    return (
        <Content ref={wrapperRef}>
            <OpenBarButton open={openSettingBar} onClick={() => setOpenSettingBar(!openSettingBar)}><SettingIco /></OpenBarButton>
            {openSettingBar &&
                <SettingBlock>
                    <HeaderBlock><Titile>Setting</Titile> <ThemeButton /></HeaderBlock>
                    <FormBlock onSubmit={(event) => changeBackground(event)}>
                        Background image
                        <StyledInput value={link} onChange={(e) => setLink(e.currentTarget.value)} placeholder="Link to img here" />
                        <ButtonBlock>
                            <StyledButton>Save</StyledButton>
                            <StyledButton setDefaultButton onClick={() => clearBackground()}>Set default</StyledButton>
                        </ButtonBlock>
                    </FormBlock>
                </SettingBlock>
            }
        </Content>
    );
};

export default Setting;