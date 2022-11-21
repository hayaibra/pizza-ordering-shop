import React, { useState } from "react";
import CartTable from "./cart-table/CartTable";
import CartTotal from "./cart-total/CartTotal";
import { CartContentBox } from "./Style";
import { useSelector, useDispatch } from "react-redux";
import Details from "../Details";

const CartContent = () => {
  const cart = useSelector((state) => state.cart);

  const total =
    cart.finalTotal.length > 0
      ? cart.finalTotal.reduce((acc, current) => acc + current)
      : cart.finalTotal[0];

  let discount = "0";
  if (cart.product.length <= 3) {
    discount = "10%";
  } else if (cart.product.length <= 6) {
    discount = "30%";
  } else {
    discount = "50%";
  }

  let finalBill = 0;
  if (discount == "10%") {
    finalBill = total * 0.1;
  } else if (discount == "30%") {
    finalBill = total * 0.3;
  } else {
    finalBill = total * 0.5;
  }
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const props = {
    Subtotal: total,
    Discount: discount,
    Total: finalBill,
  };

  return (
    <CartContentBox>
      <CartTable cart={cart.product} />
      <CartTotal props={props} handleClick={handleClick} />
      {open && <Details open={open} total={finalBill} setOpen={setOpen} />}
    </CartContentBox>
  );
};

export default CartContent;
