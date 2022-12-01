import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  align-items:center ;
  justify-content: center ;
`;

export const Button = styled.TouchableOpacity``;

export const ImageWrapper = styled.View`
  height: 80px;
  width: 80px;
  
`;
export const CategoryTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.COLORS.light_contrast};
  margin: 5px 0;
`;
