import { Box, Button, Paper } from "@mui/material";
import React from "react";
import {
  CartTotalBox,
  CartTotalContent,
  CartTotalTitle,
  PaidButton,
  Span,
} from "./Style";

const CartTotal = ({ props, handleClick }) => {
  console.log(props);
  const bill = Object.entries(props);
  return (
    <CartTotalBox>
      <CartTotalContent component={Paper} elevation={5}>
        <CartTotalTitle variant="h5">CART TOTAL</CartTotalTitle>
        {bill.map((item) => (
          <p>
            <Span>{item[0]}: </Span>
            {item[1]} {typeof item[1] === "number" && "SYP"}
          </p>
        ))}
        <PaidButton
          variant="contained"
          color="othercolor"
          onClick={handleClick}
        >
          CHECKOUT NOW !
        </PaidButton>
      </CartTotalContent>
      {/*{open && <Details open={open} total={finalBill} setOpen={setOpen} />}*/}
    </CartTotalBox>
  );
};

export default CartTotal;
