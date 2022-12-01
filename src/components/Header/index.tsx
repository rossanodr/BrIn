import { SearchBar } from "@rneui/base";
import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import categories from "../../databases/categories.json";

import {
  Categories,
  CategoryButton,
  CategoryLabel,
  Container,
  HeaderButton,
  HeaderContent,
} from "./styles";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../services/firebase";
import { CategoryDTO } from "../../DTOs/CategoryDTO";

interface Props {
  showCategories?: boolean;
  showSearchBar?: boolean;
  selectedCategory?: (category: string) => void;
  setVerticalCategoryTitles?: (any: any) => void;
}

export function Header({
  showCategories = true,
  showSearchBar = true,
  selectedCategory,
  setVerticalCategoryTitles,
}: Props) {
  const theme = useTheme();
  const [selectCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState<CategoryDTO[]>([]);

  //Handles the category on the vertical menu and the selected category
  useEffect(() => {
    async function getCategories() {
      if (selectedCategory || setVerticalCategoryTitles) {
        try {
          const categoriesRef = collection(firestore, "categories");
          const categoriesSnap = await getDocs(categoriesRef);
          const data = categoriesSnap.docs.map((doc) => ({
            uid: doc.id,
            ...doc.data(),
          })) as CategoryDTO[];
          selectedCategory(data[0].uid);
          {
            data && setCategories(data);
            {
              setSelectedCategory && setSelectedCategory(data[0].uid);
            }
            {
              setVerticalCategoryTitles &&
                setVerticalCategoryTitles(data[0].subCategories);
            }
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    getCategories();
  }, []);

  return (
    <Container>
      <HeaderContent>
        <HeaderButton>
          <AntDesign name="hearto" size={20} color="black" />
        </HeaderButton>
        <HeaderButton>
          <AntDesign name="mail" size={20} color="black" />
        </HeaderButton>
        {showSearchBar && (
          <SearchBar
            containerStyle={{
              flex: 1,
              backgroundColor: "transparent",

              borderBottomColor: "transparent",
              borderTopColor: "transparent",
            }}
            inputContainerStyle={{
              backgroundColor: theme.COLORS.light_tint,
              flex: 1,
            }}
          />
        )}
        <HeaderButton>
          <SimpleLineIcons name="bag" size={20} color="black" />
        </HeaderButton>
      </HeaderContent>
      {showCategories && (
        <Categories>
          {categories &&
            categories.map((item) => (
              <CategoryButton
                key={item.name}
                onPress={() => {
                  [
                    setSelectedCategory(item.uid),
                    selectedCategory(item.uid),
                    setVerticalCategoryTitles &&
                      setVerticalCategoryTitles(item.subCategories),
                  ];
                }}
              >
                <CategoryLabel active={item.uid === selectCategory}>
                  {item.name}
                </CategoryLabel>
              </CategoryButton>
            ))}
        </Categories>
      )}
    </Container>
  );
}
