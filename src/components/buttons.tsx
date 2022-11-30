import {BsCloudUpload, BsDownload} from "react-icons/bs";
import {downloadImage} from "../utils.ts/downloadImage";
import {compute} from "../utils.ts/action";
import {useRef} from "react";
import "./style/buttons.css"
import {AiTwotoneSetting} from "react-icons/all";

export const OptionButton = () => {
    const wrapperRef = useRef<HTMLDivElement>(null);

    return (
        <div className={"buttons py-4"}>
            <div
                className="menu-item"
                onClick={() => downloadImage(wrapperRef.current)}
            >
                <BsDownload size={20}/>
                Save
            </div>
            <div
                className="menu-item"
                onClick={() => downloadImage(wrapperRef.current)}
            >
                <BsCloudUpload size={20}/>
                Load
            </div>
            <div
                className="menu-item bg-success text-white shadow rounded-4"
                onClick={() => compute()}
            >
                <AiTwotoneSetting size={20}/>
                Compute
            </div>
        </div>
    );
};
