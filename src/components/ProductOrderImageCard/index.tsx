import React from "react";

import {
  Container,
  DescriptionContainer,
  Price,
  ProductDescription,
  ProductThumbnail,
  Title,
} from "./styles";

interface Props {
  productThumbnail: string;
  productName: string;
  productDescription: string;
  productPrice: string;
}
export function ProductOrderImageCard({
  productDescription,
  productName,
  productPrice,
  productThumbnail,
}: Props) {
  return (
    <Container>
      <ProductThumbnail source={{ uri: productThumbnail }} />
      <DescriptionContainer>
        <Title>{productName}</Title>
        <ProductDescription>{productDescription}</ProductDescription>
        <Price>R${productPrice}</Price>
      </DescriptionContainer>
    </Container>
  );
}
