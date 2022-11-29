import {useState} from "react";
import {DocsStyle} from "../utils.ts/constant";
import "./style/codeEditor.css"
import 'katex/dist/katex.min.css'
import Markdown from "./Markdown.component";

type CodeEditorProps = {
    isDarkTheme: boolean;
    content: string;
};

export const Docs = ({isDarkTheme, content}: CodeEditorProps) => {

    const [code, setCode] = useState(content);
    return (
        <div style={DocsStyle.root}>
            <Markdown>{code}</Markdown>
        </div>
    );
};
