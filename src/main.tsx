import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'

let placebo;
let docs;
await fetch("http://localhost:5173/placebo.yaml").then(
    (response) => response.text()
).then(
    (text) => {placebo = text}
)
await fetch("http://localhost:5173/doc.md").then(
    (response) => response.text()
).then(
    (text) => {docs = text}
)
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>

        <div className={"row d-flex"}>

            <div className={"col-12 col-lg-6"}>
                <App editor={false} content={docs}/>
            </div>
             <div className={"col-12 col-lg-6"}>
                <App editor={true} content={placebo}/>
            </div>

        </div>

    </React.StrictMode>
)
