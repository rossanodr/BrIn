import { collection, getDocs, limit, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";

import { RectButtonProps } from "react-native-gesture-handler";
import { useQueryProductsByCategory } from "../../hooks/useQueryProductsByCategory";
import { firestore } from "../../services/firebase";

import { Button, ButtonText, Container } from "./styles";

interface Props extends RectButtonProps {
  title: string;
  handleButtonOnFocus: (string: string) => void;
  handleSelectCategory?: (
    headerCategory: string,
    subCategory?: string
  ) => { productsList: any[] };
  isButtonActive: boolean;
  headerCategory: string;
  subCategory: string;
}

export function CategoriesFlatListButton({
  title,
  isButtonActive,
  handleButtonOnFocus,
  handleSelectCategory,
  subCategory,
  headerCategory,
  ...rest
}: Props) {
  const [buttonActivity, setButtonActivity] = useState(false);

  useEffect(() => {
    setButtonActivity(isButtonActive);
  }, [isButtonActive]);

  useEffect(() => {
    handleButtonOnFocus(title);
  }, []);

  return (
    <Container active={buttonActivity}>
      <Button
        active={buttonActivity}
        {...rest}
        onPress={() => [handleButtonOnFocus(title), isButtonActive]}
      >
        <ButtonText active={buttonActivity}>{title}</ButtonText>
      </Button>
    </Container>
  );
}
