import { Avatar, Badge, Box, styled } from "@mui/material";
import React from "react";
import Links from "../../ui/links/Links";
import { useSelector, useDispatch } from "react-redux";
import { zero } from "../../../app/store/Counter";
import Image from "next/image";
import Link from "next/link";
import { BasketBox } from "./Style";

const BasketSlice = ({ basket }) => {
  const globalState = useSelector((state) => state);
  const counter = globalState.counter.value;
  const dispatch = useDispatch();

  return (
    <BasketBox basket={basket}>
      <Link href="/cart" passHref>
        <div onClick={() => dispatch(zero(0))}>
          <Badge badgeContent={counter}>
            <Avatar sx={{ bgcolor: "white", cursor: "pointer" }}>
              <Image
                src={require("../../../public/imgs/cart.png")}
                width="20"
                height="20"
                alt="cart"
              />
            </Avatar>
          </Badge>
        </div>
      </Link>
    </BasketBox>
  );
};

export default BasketSlice;
