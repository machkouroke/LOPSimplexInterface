import {useRef, useState} from "react";
import "./App.css";
import {CodeEditor} from "./components/CodeEditor";
import {OptionButton} from "./components/buttons";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
    CodeEditorStyle,
    DEFAULT_WRAPPER_WIDTH,
    DocsStyle
} from "./utils.ts/constant";
import {useMouseMove} from "./hooks/useMouseMove";
import {Docs} from "./components/docs";


export default function App(props: {
    content: any;
    editor: any;
}) {

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
