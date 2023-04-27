import { OpenBarButton, Content, Titile, SettingBlock, StyledInput, FormBlock, StyledButton, ButtonBlock, HeaderBlock, StyledForm } from "./styled";
import { ReactComponent as SettingIco } from './settingIco.svg';
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import ThemeButton from "./ThemeButton";
import { useDispatch } from "react-redux";
import { changeBackgroundImg, resetBackground } from "./backgroundImgSlice";

const Setting = () => {
    const [openSettingBar, setOpenSettingBar] = useState();
    const wrapperRef = useRef(null);
    const [url, setUrl] = useState("");
    const dispatch = useDispatch();

    const changeBackground = (e) => {
        e.preventDefault();
        if (!url) return
        dispatch(changeBackgroundImg(url));
        setUrl("");
    };

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

    return (
        <Content ref={wrapperRef}>
            <OpenBarButton
                open={openSettingBar}
                onClick={() => setOpenSettingBar(!openSettingBar)}>
                <SettingIco />
            </OpenBarButton>
            {openSettingBar &&
                <SettingBlock>
                    <HeaderBlock>
                        <Titile>Setting</Titile>
                        <ThemeButton />
                    </HeaderBlock>
                    <StyledForm onSubmit={(e) => changeBackground(e)}>
                        Background url
                        <StyledInput
                            value={url}
                            onChange={(e) => setUrl(e.currentTarget.value)}
                            placeholder="Image url (with .jpg .png)"
                        />
                        <ButtonBlock>
                            <StyledButton>Save</StyledButton>
                            <StyledButton setDefaultButton onClick={() => { dispatch(resetBackground()) }}>Set default</StyledButton>
                        </ButtonBlock>
                    </StyledForm>
                </SettingBlock>
            }
        </Content>
    );
};

export default Setting;