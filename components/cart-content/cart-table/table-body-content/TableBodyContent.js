import { TableCell, TableRow, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const TableBodyContent = ({ row }) => {
  const { img, name, extras, price, quantity } = row;
  return (
    <TableRow>
      <TableCell>
        <Image src={img} width="70" height="70" alt={name} />
      </TableCell>
      <TableCell>
        <Typography color="error">{name}</Typography>
      </TableCell>
      <TableCell>
        {extras.map((extra) => (
          <span key={extra.id}>{extra},</span>
        ))}
      </TableCell>
      <TableCell>{price} SPY</TableCell>
      <TableCell>{quantity}</TableCell>
      <TableCell>{price * quantity} SYP</TableCell>
    </TableRow>
  );
};

export default TableBodyContent;
