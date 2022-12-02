import React, {useState} from "react";
import {DocsStyle} from "../utils.ts/constant";
import "./style/codeEditor.css"
import "./style/docs.css"
import 'katex/dist/katex.min.css'
import Markdown from "./Markdown.component";
import AnswerPrint from "./AnswerPrint";
import {BsCloudUpload} from "react-icons/bs";
import {GrDocumentText} from "react-icons/all";

import {flipFront} from "../utils.ts/action";

type CodeEditorProps = {
    isDarkTheme: boolean;
    content: string;
};

export const Docs = ({content}: CodeEditorProps) => {

    const [code, setCode] = useState(content);
    return (
        <div style={DocsStyle.root} className={"flip-box"}>
            <div className={"flip-box-inner"}>
                <div className={"flip-box-front"}>
                    <Markdown>{code}</Markdown>
                </div>
                <div className={"flip-box-back"}>
                    <div className={"buttons py-4"}>
                        <div
                            className="menu-item"
                            onClick={() => flipFront()}
                        >
                            <GrDocumentText size={20}/>
                            Docs
                        </div>
                        <div
                            className="menu-item"

                        >
                            <BsCloudUpload size={20}/>
                            Load
                        </div>

                    </div>
                    <AnswerPrint></AnswerPrint>
                </div>
            </div>
        </div>
    );
};
