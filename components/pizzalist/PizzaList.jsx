import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { PizzaListBox } from "./Style";
import Card from "./Card";

function PizzaList({ products }) {
  return (
    <div>
      <PizzaListBox id="p">
        <Typography
          variant="h4"
          color="primary"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "30px", md: "40px" },
            marginTop: "20px",
          }}
          textAlign="center"
        >
          The Best Pizza Resturant
        </Typography>
        <Grid
          container
          spacing={10}
          my={3}
          sx={{ justifyContent: { xs: "center", sm: "flex-start" } }}
        >
          <Container maxWidth="xl">
            {products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </Container>
        </Grid>
      </PizzaListBox>
    </div>
  );
}

export default PizzaList;
