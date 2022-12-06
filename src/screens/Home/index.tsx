import React, { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useTheme } from "styled-components/native";

import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { ProductCard } from "../../components/ProductCard";
import { firestore } from "../../services/firebase";

export function Home() {
  const theme = useTheme();
  const [refreshing, setRefreshing] = useState(false);
  const [headerCategory, setHeaderCategory] = useState("");
  const [products, setProducts] = useState([]);

/* Fetching data from firebase and setting it to the state. */
  useEffect(() => {
    async function fetchData() {
      try {
        const categoriesRef = collection(firestore, "products");
        const q = query(categoriesRef, where("category", "==", `${headerCategory}`));
        const categoriesSnap = await getDocs(q);
        const data = categoriesSnap.docs.map((doc) => ({
          uid: doc.id,
          ...doc.data(),
        }));

        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [headerCategory]);

  return (
    <Container>
      <Content>
        <Header selectedCategory={setHeaderCategory} />
      </Content>
      <Content>
        <FlatList
          onRefresh={() => setRefreshing(true)}
          refreshing={refreshing}
          data={products}
          numColumns={2}
          key={2}
          contentContainerStyle={{
            backgroundColor: theme.COLORS.light_tint,
            paddingBottom: 80,
          }}
          renderItem={(item) => (
            <ProductCard
              description={item.item.name}
              img={item.item.img}
              price={item.item.price}
              id={item.item.uid}
            />
          )}
        />
      </Content>
    </Container>
  );
}
