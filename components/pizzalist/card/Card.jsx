import React from "react";
import { Grid, Typography } from "@mui/material";
import { Price } from "../Style";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";
import Image from "next/image";
import { DescBox, PaperBox, RateBox } from "./Style";

function Card({ product }) {
  const { rate, img, name, price, desc } = product;

  return (
    <Grid item lg={3} md={4} xs={10} sm={6} textAlign="center">
      <Link href={`/products/${product.id}`} passHref>
        <PaperBox elevation={0}>
          <RateBox>
            <StarIcon sx={{ color: "yellow" }} fontSize="small" />
            <span style={{ fontWeight: "bold" }}>{rate}</span>
          </RateBox>
          <div>
            <Image src={img} width="150" height="150" alt={name} />
          </div>
          <Typography variant="body1" sx={{ fontWeight: "bold" }} gutterBottom>
            {name}
          </Typography>
          <Price varient="body2" fontWeight="bold" fontSize="15px" gutterBottom>
            {price[2]}
          </Price>
          <DescBox>{desc}</DescBox>
        </PaperBox>
      </Link>
    </Grid>
  );
}

export default Card;
