import React from "react";
import { ExpoFastImage } from "expo-fast-image";

import { Button, CategoryTitle, Container, ImageWrapper } from "./styles";
import { Image } from "@rneui/base";

interface Props {
  imageUrl?: string;
  categoryTitle?: string;
}

export function CategoryButtonWithImage({categoryTitle, imageUrl}: Props) {
  return (
    <Container>
      <ImageWrapper>
        <Image
          source={{
            uri: imageUrl,
          }}
          style={{ height: "100%", width: "100%"}}
          resizeMode="cover"
        />
      </ImageWrapper>
      <CategoryTitle>{categoryTitle}</CategoryTitle>
    </Container>
  );
}
