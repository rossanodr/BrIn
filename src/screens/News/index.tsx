import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { useTheme } from "styled-components/native";
import { Header } from "../../components/Header";
import { ProductCard } from "../../components/ProductCard";

import { Container, Content } from "./styles";

export function News() {
  const theme = useTheme();
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Container>
      <Content>

      <Header showCategories={false}/>
      </Content>
      <Content>

      <FlatList
        data={data}
        numColumns={2}
        key={2}
        contentContainerStyle={{backgroundColor: theme.COLORS.light_tint, paddingBottom: 80}}
        renderItem={(item) => <ProductCard />}
        />
        </Content>
    </Container>
  );
}
