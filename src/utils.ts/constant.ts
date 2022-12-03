import darkTheme from "prism-react-renderer/themes/nightOwl";
import lightTheme from "prism-react-renderer/themes/nightOwlLight";

export const Theme = {
  DARK: "dark",
  LIGHT: "light",
};
export const DEFAULT_WRAPPER_WIDTH = 600;
export const MIN_WRAPPER_WIDTH = 400;
export const MAX_WRAPPER_WIDTH = 1280;
export const RESIZE_OFFSET = 100;
export const CodeEditorStyle = {
  codeTheme: darkTheme,
  root: {
    fontFamily: '"Fira code", "Fira Mono", monospace',
    fontSize: 16,
    ...darkTheme.plain,
    backgroundColor: "inherit",
    height: '300px',
    overflowY: "auto"
  },
  backgroundColor:
    "linear-gradient(to left bottom, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))",
};

export const DocsStyle = {
  codeTheme: lightTheme,
  root: {
    fontFamily: '"Roboto"',
    fontSize: 16,
    ...lightTheme.plain,

    backgroundColor: "inherit",
    height: '400px',
    textAlign: "justify",
    overflowY: "auto",
    perspective: "1000px"
  },

  backgroundColor:
    "white",
};

export const LANGUAGES = [
  {
    label: "TypeScript",
    value: "tsx",
  },
  {
    label: "YAML",
    value: "yaml",
  },
  {
    label: "C",
    value: "c",
  },
  {
    label: "HTML",
    value: "markup",
  },
  {
    label: "Go",
    value: "go",
  },
  {
    label: "CSS",
    value: "css",
  },
  {
    label: "Python",
    value: "python",
  },
];
