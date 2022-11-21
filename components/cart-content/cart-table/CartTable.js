import React from "react";
import { CartTableContainer } from "./Style";
import { useSelector, useDispatch } from "react-redux";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Image from "next/image";
import TableBodyContent from "./table-body-content/TableBodyContent";

const cells = ["Product", "Name", "Extras", "Price", "Quantity", "Total"];

const CartTable = ({cart}) => {

  return (
    <CartTableContainer component={Paper} elevation={0}>
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
          {cart.map((row) => (
            <TableBodyContent key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </CartTableContainer>
  );
};

export default CartTable;
