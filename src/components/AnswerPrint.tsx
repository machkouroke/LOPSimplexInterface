import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Markdown from "./Markdown.component";
import {Loader} from "./loader";
import {ErrorBox} from "./ErrorBox";

interface AnswerPrintProps {
}

interface AnswerPrintState {
    answerState: string;
    script: string;
    columns: string[];
    rows: any[][];
    error: string;
    simplexArray: Array<Array>;
}

export default class AnswerPrint extends React.Component<AnswerPrintProps, AnswerPrintState> {


    constructor(props: AnswerPrintProps) {
        super(props);
        // @ts-ignore
        window.printer = this;

        this.state = {
            answerState: "loading",
            script: "",
            columns: [],
            rows: [
                // ['$x_1$', 158, 6.0, 24, 4.0, 7],
                // ['$x_2$', 237, 9.0, 37, 4.3, 8],
                // ['$x_3$', 262, 16.0, 24, 6.0, 9],
                // ['$c_j$', 305, 3.7, 67, 4.3, 10],
            ],
            error: "",
            simplexArray: [1, 2, 3, 6, 7]
        }
        this.compute = this.compute.bind(this);
    }

    compute(script: String) {
        // @ts-ignore
        console.log(script);
        fetch(`https://simplex-qzx7yzjfkq-ew.a.run.app/solve`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({script: script}),
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    return response.text().then(text => {
                        const message = JSON.parse(text).message;
                        throw new Error(message)
                    })
                }
            })
            .then(result => {
                console.log(result);
                this.setState({"columns": result.allVariables.map((x: any) => `$${x}$`)});
                this.setState({"simplexArray": result.data});
                this.setState({"answerState": "loaded"});
            }).catch(err => {
            console.log(err);
            this.setState({"answerState": "error", "error": err.message});
        })
    }


    // @ts-ignore
    render() {

        const config = {
            error: <ErrorBox message={this.state.error}></ErrorBox>, loading: (<Loader></Loader>)
        }
        if (this.state.answerState === "loaded") {
            return <div>
                {this.state.simplexArray.map((iteration, index) => (
                    <div>
                        <h4 className={"text-center"}>Tableau {index + 1}</h4>
                        <TableContainer component={Paper} className={"my-3 rounded-4"}>
                            <Table size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>*</TableCell>
                                        {this.state.columns.map((column) => (
                                            <TableCell align="right"><Markdown>{column}</Markdown></TableCell>))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {iteration.map((row) => (
                                        <TableRow
                                            key={row[0]}
                                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                        >
                                            <TableCell component="th" scope="row">
                                                {<Markdown>{row[0]}</Markdown>}
                                            </TableCell>
                                            {row.slice(1).map((value) => (
                                                <TableCell align="right">{value}</TableCell>
                                            ))}
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>))}
            </div>
        }
        // @ts-ignore
        return config[this.state.answerState]
    }
}
