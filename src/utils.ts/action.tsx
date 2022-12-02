import AnswerPrint from "../components/AnswerPrint";
export const compute = () => {
    const script = document.querySelector(".code-editor")?.textContent;
    const answerBlock = document.querySelector(".flip-box-inner");
    const simplexArrayBlock = document.querySelector(".flip-box-back");
    if (!script) {
        console.log('No script provided: ' + script);
        return;
    }
    // simplexArrayBlock?.appendChild(<AnswerPrint script={content}></AnswerPrint>);
    flipBack(answerBlock);
};

function flipBack(element: Element | null) {
    if (!element?.classList.contains(".flipped")) {
        element?.classList.add("flipped");
    }
}

export const flipFront = () => {
    const answerBlock = document.querySelector(".flip-box-inner");
    if (answerBlock?.classList.contains("flipped")) {
        answerBlock.classList.remove("flipped");
    }
}