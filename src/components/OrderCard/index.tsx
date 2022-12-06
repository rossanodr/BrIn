import React from "react";

import { Container, Content, OrderStatus, StylistName } from "./styles";
import { ProductOrderImageCard } from "../ProductOrderImageCard";

export function OrderCard() {
  return (
    <Container>
      <Content>
        <StylistName>The_Name_Here</StylistName>
        <OrderStatus>Preparando</OrderStatus>
      </Content>
      <ProductOrderImageCard
        productName="Camisa de Futebol"
        productDescription="Size: M"
        productPrice="59,99"
        productThumbnail="https://cf.shopee.com.br/file/af61bab859bf043b938a4027ca545001"
      />
         <ProductOrderImageCard
        productName="Camisa de Futebol"
        productDescription="Size: M"
        productPrice="59,99"
        productThumbnail="https://cf.shopee.com.br/file/af61bab859bf043b938a4027ca545001"
      />
         <ProductOrderImageCard
        productName="Camisa de Futebol"
        productDescription="Size: M"
        productPrice="59,99"
        productThumbnail="https://cf.shopee.com.br/file/af61bab859bf043b938a4027ca545001"
      />
      <Content>
        <StylistName>1 tem</StylistName>
        <OrderStatus>Total do Pedido: R$59.99</OrderStatus>
      </Content>
    </Container>
  );
}
