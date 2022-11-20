import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const cells = ["Order ID", "Customer", "Address", "Total"];

const TableOrder = ({ orders }) => {
  const { id, cutomerName, address, finalTotal } = orders;
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {cells.map((cell, i) => (
              <TableCell sx={{ fontWeight: "bold" }} key={i}>
                {cell}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={id}>
              <TableCell>{id}</TableCell>
              <TableCell>{cutomerName}</TableCell>
              <TableCell>{address}</TableCell>
              <TableCell>{finalTotal} SYP</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableOrder;
