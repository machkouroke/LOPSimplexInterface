import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Markdown from "./Markdown.component";

export default class AnswerPrint extends React.Component {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        // @ts-ignore
        window.printer = this;

        this.state = {
            loaded: false,
            script: "",
            columns: ["$x_1$", "$x_2$", "$x_3$",
                "$e_1$", "$B$"],
            rows: [
                ['$x_1$', 158, 6.0, 24, 4.0, 7],
                ['$x_2$', 237, 9.0, 37, 4.3, 8],
                ['$x_3$', 262, 16.0, 24, 6.0, 9],
                ['$c_j$', 305, 3.7, 67, 4.3, 10],
            ],
            simplexArray: [1, 2, 3, 6, 7]
        }
        this.compute = this.compute.bind(this);
    }

    compute(script: String) {
        console.log(script);
        fetch(`https://simplex-qzx7yzjfkq-ew.a.run.app`)
            .then(res => res.text())
            .then(result => {
                this.setState({"loaded": true});
            })
    }


    // @ts-ignore
    render() {


        // @ts-ignore
        return this.state.loaded ? (
            <div>
                {this.state.simplexArray.map((value) => (
                    <div>
                        <h4>Simplex {value}</h4>
                        <TableContainer component={Paper} className={"my-3 rounded-4"}>
                            <Table sx={{minWidth: 650}} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>*</TableCell>
                                        {this.state.columns.map((column) => (
                                            <TableCell align="right"><Markdown>{column}</Markdown></TableCell>))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.rows.map((row) => (
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
        ) : (<div>Loading</div>)
    }
}