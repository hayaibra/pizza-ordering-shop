import React, { useState } from "react";
import { OrdersBox, OrdersContent } from "./Style";
import { useSelector, useDispatch } from "react-redux";
import TableOrder from "./table-order/TableOrder";
import MoreServices from "./more-sevices/MoreServices";
import Payment from "./payment/Payment";
import { reset } from "../../app/store/Data";
import { resett } from "../../app/store/Cart";

const Orders = () => {
  const orders = useSelector((state) => state.data.info);
  const [paid, setPaid] = useState(true);
  const dispatch = useDispatch();

  const bill = [];
  {
    orders.map((order) => {
      const finalBill = bill.push(order.finalTotal);
    });
  }

  const handleClick = () => {
    setPaid(false);
    dispatch(reset());
    dispatch(resett());
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setPaid(true);
  };

  return (
    <OrdersBox>
      <OrdersContent>
        <TableOrder orders={orders} />
        <MoreServices />
      </OrdersContent>
      <Payment
        bill={bill}
        handleClick={handleClick}
        handleClose={handleClose}
        paid={paid}
      />
    </OrdersBox>
  );
};

export default Orders;
