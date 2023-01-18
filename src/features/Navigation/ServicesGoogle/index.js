import { useState, useEffect, useRef } from "react";
import { Content, Button, Img, Block, Footer } from "./styled";
import { ReactComponent as IconMenu } from './icons/bar.svg';

const ServicesGoogle = () => {
    const [showServicesBar, setShowServicesBar] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setShowServicesBar(false);
            };
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    return (
        <>
            <Button bar={showServicesBar} onClick={(e) => setShowServicesBar(!showServicesBar)}><IconMenu /></Button>
            {showServicesBar &&
                <Content ref={wrapperRef}>
                    <Block href="https://mail.google.com/mail/?tab=rm">
                        <Img src={require("./icons/gmail.png")} alt=""></Img>
                        Gmail
                    </Block>
                    <Block href="https://docs.google.com/spreadsheets/?usp=sheets_alc&authuser=0">
                        <Img src={require("./icons/exel.png")} alt=""></Img>
                        Excel
                    </Block>
                    <Block href="https://docs.google.com/document/?usp=docs_alc&authuser=0">
                        <Img src={require("./icons/word.png")} alt=""></Img>
                        Word
                    </Block>
                    <Block href="https://maps.google.pl/maps?hl=pl&tab=rl">
                        <Img src={require("./icons/maps.png")} alt=""></Img>
                        Maps
                    </Block>
                    <Block href="https://www.youtube.com/?tab=r1">
                        <Img src={require("./icons/youtube.png")} alt=""></Img>
                        Youtube
                    </Block>
                    <Block href="https://keep.google.com/u/0">
                        <Img src={require("./icons/keep.png")} alt=""></Img>
                        Keep
                    </Block>
                    <Block href="https://translate.google.pl/?hl=pl&tab=rT">
                        <Img src={require("./icons/translator.png")} alt=""></Img>
                        Translator
                    </Block>
                    <Block href="https://drive.google.com/?tab=ro&authuser=0">
                        <Img src={require("./icons/drive.png")} alt=""></Img>
                        Drive
                    </Block>
                    <Block href="https://photos.google.com/?tab=rq&pageId=none">
                        <Img src={require("./icons/images.png")} alt=""></Img>
                        Images
                    </Block>
                    <Footer href="https://www.google.pl/intl/pl/about/products?tab=rh">More services</Footer>
                </Content>
            }
        </>
    );
};

export default ServicesGoogle;