import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  height: 80px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.light_tint};
  border-bottom-width: 0.8px;

  border-color: ${({ theme }) => theme.COLORS.light_shade};
`;

export const ProductThumbnail = styled.Image`
  height: 70px;
  width: 70px;
  margin-left: 10px;
  background-color: gray;
`;

export const DescriptionContainer = styled.View`
  flex: 1;
  padding: 0 10px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.COLORS.light_contrast};
`;

export const ProductDescription = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT_LIGHT};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.COLORS.light_contrast};
  text-align: justify;
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT_LIGHT};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.COLORS.danger_tint};
  text-align: justify;
  align-self: flex-end;
`;
