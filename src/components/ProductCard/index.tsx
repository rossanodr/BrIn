import React from "react";
import ExpoFastImage from "expo-fast-image";
import { Container, ImageWrapper, LabelContainer, Price, ProductDescription } from "./styles";

interface Props {
  img: string;
  price: string;
  description: string;
  id: string;
}

export function ProductCard({description, img, price, id}: Props) {
    const url = "https://img.ltwebstatic.com/images3_pi/2022/05/06/165180795441c853c60fac733d3e1f4ecf4e9e76ea.webp"
    
  return (
    <Container>
      <ImageWrapper>
        <ExpoFastImage
          uri={img}
          cacheKey={id}
          style={{ height:'100%' }}
        />
      </ImageWrapper>
      <LabelContainer>

      <Price>R${price}</Price>
      <ProductDescription>{description}</ProductDescription>
      </LabelContainer>
    </Container>
  );
}
