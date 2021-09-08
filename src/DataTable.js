import React, { Fragment, useState } from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";

export default function DataTable() {
  const [rowCount, setRowCount] = useState("");
  const [colCount, setColCount] = useState("");

  const [rowCountArray, setRowCountArray] = useState([]);
  const [colCountArray, setColCountArray] = useState([]);

  const [showTable, setShowTable] = useState(false);

  const CreateTable = async () => {
    setShowTable(false);
    rowCountArray.length = 0;
    colCountArray.length = 0;

    for (let i = 1; i <= rowCount; i++) {
      rowCountArray.push(i);
    }
    setRowCountArray(rowCountArray);

    for (let i = 1; i <= colCount; i++) {
      colCountArray.push(i);
    }
    setColCountArray(colCountArray);

    setShowTable(true);
  };

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Row Count</TableCell>
            <TableCell>Col Count</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              <input
                type="text"
                id="txtrows"
                value={rowCount}
                onChange={(e) => setRowCount(e.target.value)}
              />
            </TableCell>
            <TableCell component="th" scope="row">
              <input
                type="text"
                id="txtcols"
                value={colCount}
                onChange={(e) => setColCount(e.target.value)}
              />
            </TableCell>
            <TableCell>
              <Button variant="contained" color="primary" onClick={CreateTable}>
                Create Table
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      {showTable ? (
        <Table>
          <TableBody>
            {rowCountArray.map((row, index) => (
              <TableRow key={index}>
                {colCountArray.map((col, index) => (
                  <TableCell key={index}>
                    Row {row} - Col {col}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : null}
    </>
  );
}
