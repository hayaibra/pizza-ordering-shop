import { Alert, Box, Button, Snackbar, Typography } from "@mui/material";
import React from "react";
import { PaymentBox, PaymentContent } from "./Style";

const Payment = ({ bill, handleClick, handleClose , paid }) => {
  return (
    <PaymentBox>
      <PaymentContent>
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ marginBottom: "40px" }}
        >
          CART TOTAL
        </Typography>
        <Box>
          <p>
            <span style={{ fontWeight: "bold" }}>Subtotal:</span>
            {bill.length > 0
              ? bill.reduce((acc, current) => acc + current)
              : bill[0]}
            SYP
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Discount:</span> 0
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Total:</span>
            {bill.length > 0
              ? bill.reduce((acc, current) => acc + current)
              : bill[0]}
            SYP
          </p>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant={paid ? "contained" : "disabled"}
            color="success"
            sx={{ marginTop: "20px" }}
            onClick={handleClick}
          >
            PAID
          </Button>
          <Snackbar open={!paid} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              severity="success"
              sx={{
                width: "100%",
              }}
            >
              successfuly !
            </Alert>
          </Snackbar>
        </Box>
      </PaymentContent>
    </PaymentBox>
  );
};
export default Payment;
