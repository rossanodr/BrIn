import React, { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { useTheme } from "styled-components";

import { CategoryButton, CategoryLabel, Container } from "./styles";

interface Props {
  selectedCategory?: (category: string) => void;
}
export function MyOrdersHeader({ selectedCategory }: Props) {
  const MyOrdersHeaderCategories = [
    "Não Pago",
    "Processando",
    "Enviado",
    "Comentar",
    "Devolução",
  ];

  const [selectCategory, setSelectedCategory] = useState("Não Pago");

  return (
    <Container>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={MyOrdersHeaderCategories}
        renderItem={(item) => (
          <CategoryButton
            onPress={() => [
              setSelectedCategory(item.item),
              selectedCategory(item.item),
            ]}
          >
            <CategoryLabel active={selectCategory === item.item}>
              {item.item}
            </CategoryLabel>
          </CategoryButton>
        )}
      />
    </Container>
  );
}
