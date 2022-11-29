import {useRef, useState} from "react";
import "./App.css";
import {copyImage} from "./utils.ts/copyImage";
import {CodeEditor} from "./components/CodeEditor";
import {OptionButton} from "./components/buttons";
import {BsSun, BsMoonFill, BsDownload, BsCodeSlash} from "react-icons/bs";
import {BiCopy} from "react-icons/bi";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
    CodeEditorStyle,
    DEFAULT_WRAPPER_WIDTH,
    LANGUAGES,
    DocsStyle,
    Theme,
} from "./utils.ts/constant";
import {useMouseMove} from "./hooks/useMouseMove";
import {downloadImage} from "./utils.ts/downloadImage";
import {Docs} from "./components/docs";


export default function App(props: {
    content: any;
    editor: any;
}) {

    const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES[0].value);
    const [wrapperWidth, setWrapperWidth] = useState(DEFAULT_WRAPPER_WIDTH);
    const isDarkTheme = props.editor;
    const wrapperRef = useRef<HTMLDivElement>(null);
    useMouseMove(setWrapperWidth);
    const textAreaBackground = isDarkTheme
        ? CodeEditorStyle.backgroundColor
        : DocsStyle.backgroundColor;

    return (
        <>
            <ToastContainer/>


            <div className="editor row">
                <div
                    className="wrapper "
                    style={{width: wrapperWidth}}
                    ref={wrapperRef}
                >

                    <div
                        className="container"
                        style={{
                            backgroundImage: textAreaBackground,
                        }}>
                        {props.editor ? <CodeEditor isDarkTheme={isDarkTheme} content={props.content}/> :
                            <Docs isDarkTheme={isDarkTheme} content={props.content}/>}

                    </div>

                </div>

                {props.editor && <OptionButton/>}

            </div>


        </>
    );
}
