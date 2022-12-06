import React, { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { useTheme } from "styled-components";

import { Container, Content } from "./styles";
import { MyOrdersHeader } from "../../../components/MyOrdersHeader";
import { OrderCard } from "../../../components/OrderCard";

export function MyOrders() {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('');

  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  useEffect(()=> {
    console.log(selectedCategory)
  },[selectedCategory])
  return (
    <Container>
      <Content>
        <FlatList
          contentContainerStyle={{
            backgroundColor: theme.COLORS.light_tint,
            paddingBottom: 80,
          }}
          data={data}
          renderItem={(item) => <OrderCard />}
          ListHeaderComponent={<MyOrdersHeader selectedCategory={setSelectedCategory}/>}
        />
      </Content>
    </Container>
  );
}
