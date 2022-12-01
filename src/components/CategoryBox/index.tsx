import { addDoc, collection, doc } from "firebase/firestore";
import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { CategoryDTO } from "../../DTOs/CategoryDTO";

import { CategoryButtonWithImage } from "../CategoryButtonWithImage";

import { CategoryTitle, Container, Content, TitleContainer } from "./styles";
interface Props {
  title: string;
  data: {name: string, img: string}[];
}
export function CategoryBox({title, data}: Props) {


  return (
    
    <Container>
      <TitleContainer>
        <CategoryTitle>{title}</CategoryTitle>
      </TitleContainer>
      <Content>
        {data.map((item, index) => (
          <RectButton style={{ marginRight: 5 }} key={index}>
            <CategoryButtonWithImage key={index} categoryTitle={item.name} imageUrl={item.img}/>
          </RectButton>
        ))}
      </Content>
    </Container>
  );
}
