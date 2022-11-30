import {useState} from "react";
import Editor from "react-simple-code-editor";
import Highlight, {defaultProps} from "prism-react-renderer";
import {CodeEditorStyle} from "../utils.ts/constant";
import "./style/codeEditor.css"

type CodeEditorProps = {
    isDarkTheme: boolean;
    content: string;
};

export const CodeEditor = ({content}: CodeEditorProps) => {

    const [code, setCode] = useState(content);

    const highlight = (code: string) => (
        <Highlight
            {...defaultProps}
            theme={CodeEditorStyle.codeTheme}
            code={code}
            language="yaml"
        >
            {({tokens, getLineProps, getTokenProps}) => (
                <>
                    {tokens.map((line, i) => (
                        <div {...getLineProps({line, key: i})}>
                            {line.map((token, key) => (
                                <span {...getTokenProps({token, key})} />
                            ))}
                        </div>
                    ))}
                </>
            )}
        </Highlight>
    );

    // @ts-ignore
    return (
        <Editor
            value={code}
            onValueChange={(code) => setCode(code)}
            highlight={(code) => highlight(code)}
            padding={10}
            textareaClassName={"code-editor"}
            style={CodeEditorStyle.root}
        />
    );
};
