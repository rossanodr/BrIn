import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  
 
height: 80px ;
max-height: 100px ;

  background-color: ${({ theme }) => theme.COLORS.light_background};
  border-bottom-width: 0.2px;
  border-bottom-color: ${({ theme }) => theme.COLORS.light_shade};
  margin: 5px 0;
`;

export const Content = styled(RectButton)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  margin: 0 5px;
`;
export const TextContainer = styled.View`
  flex:1;
  max-width: 80%;
  padding: 10px 0;
`;
export const ButtonTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.COLORS.light_contrast};
`;

export const ButtonContainer = styled.View`
`;

export const ButtonDescription = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT_LIGHT};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.COLORS.light_contrast};
  text-overflow:ellipsis ;
`;
