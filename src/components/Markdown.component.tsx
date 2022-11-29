import React from 'react';
import ReactMarkdown from 'react-markdown';
import "katex/dist/katex.min.css"

import RemarkMathPlugin from 'remark-math';
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";

const Markdown = (props: any) => <ReactMarkdown
    children={props.children}
    remarkPlugins={[RemarkMathPlugin]}
    rehypePlugins={[rehypeKatex, rehypeHighlight]}

/>

export default Markdown;