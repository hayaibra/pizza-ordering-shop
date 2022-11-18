import React from "react";
import { ContentBox, PizzaListBox, Title } from "./Style";
import Card from "./card/Card";

function PizzaList({ products }) {
  return (
    <div>
      <PizzaListBox id="p">
        <Title variant="h4" color="primary" textAlign="center">
          The Best Pizza Resturant
        </Title>
        <ContentBox container spacing={3} my={3}>
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </ContentBox>
      </PizzaListBox>
    </div>
  );
}

export default PizzaList;
