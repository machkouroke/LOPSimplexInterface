import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Markdown from "./Markdown.component";




const columns = ["$x_1$", "$x_2$", "$x_3$",
    "$e_1$", "$B$"];

const rows = [
    ['$x_1$', 158, 6.0, 24, 4.0, 7],
    ['$x_2$', 237, 9.0, 37, 4.3, 8],
    ['$x_3$', 262, 16.0, 24, 6.0, 9],
    ['$c_j$', 305, 3.7, 67, 4.3, 10],
];

export default function AnswerPrint() {
    return (

        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>*</TableCell>
                        {columns.map((column) => (
                            <TableCell align="right"><Markdown>{column}</Markdown></TableCell>))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
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


    );
}