import React, { useEffect, useState } from "react";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { useTheme } from "styled-components/native";

import { CategoriesFlatListButton } from "../../components/CategoriesFlatListButton";
import { Container, Content, ListWrapper } from "./styles";
import { Header } from "../../components/Header";
import { ProductCard } from "../../components/ProductCard";
import { useQueryProductsByCategory } from "../../hooks/useQueryProductsByCategory";

export function Categories() {
  const theme = useTheme();
  const [subCategory, setSubCategory] = useState("");
  const [headerCategory, setHeaderCategory] = useState("1");
  const [verticalCategoryTitles, setVerticalCategoryTitles] = useState([]);

  const { productsList } = useQueryProductsByCategory(
    headerCategory,
    subCategory
  );

  // Handles the button Title & the button selected
/* It's setting the first item of the array as the default selected item. */
  useEffect(() => {
    {
      verticalCategoryTitles && console.log(verticalCategoryTitles[0]);
      setSubCategory(verticalCategoryTitles[0]);
    }
  }, [headerCategory, verticalCategoryTitles]);

  return (
    <Container>
      <Content>
        <Header
          selectedCategory={setHeaderCategory}
          setVerticalCategoryTitles={setVerticalCategoryTitles}
        />
      </Content>
      <Content>
        {/* THIS IS THE VERTICAL MENU */}
        <ListWrapper style={{ width: "25%" }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
              backgroundColor: theme.COLORS.light_tint,
              width: "100%",
              height: "100%",
            }}
            contentContainerStyle={{
              paddingBottom: 80,
            }}
          >
            {verticalCategoryTitles &&
              verticalCategoryTitles.map((item) => (
                <CategoriesFlatListButton
                  key={item}
                  title={item}
                  handleButtonOnFocus={setSubCategory}
                  isButtonActive={subCategory === item}
                  headerCategory={headerCategory}
                  subCategory={subCategory}
                />
              ))}
          </ScrollView>
        </ListWrapper>
        {/* HERE'S THE CONTENT */}
        <ListWrapper style={{ flex: 1, height: "100%" }}>
          <FlatList
            data={productsList}
            numColumns={2}
            key={2}
            contentContainerStyle={{
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
        </ListWrapper>
      </Content>
    </Container>
  );
}
