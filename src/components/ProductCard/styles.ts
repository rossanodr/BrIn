import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex:1;

  justify-content: center;
  border-radius: 8px;
  margin: 5px 10px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.COLORS.light_background};
`;
export const ImageWrapper = styled.View`
  max-height: 200px;

  width: 100%;
`;

export const LabelContainer = styled.View`
  margin: 5px 10px;
`;
export const Price = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.COLORS.light_contrast};
`;

export const ProductDescription = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.COLORS.light_contrast};
`;
