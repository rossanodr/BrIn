import React from "react";

import { Container } from "./styles";
import { CreditCard } from "../../../components/CreditCard";

export function MyCards() {
  return (
    <Container>
      <CreditCard />
      <CreditCard />
      <CreditCard />
      <CreditCard />
      <CreditCard />
    </Container>
  );
}
