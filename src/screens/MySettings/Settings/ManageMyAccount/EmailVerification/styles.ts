import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme})=> theme.COLORS.light_background} ;
`;

export const Content = styled.View`
  height: 500px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.COLORS.light_contrast};
  margin: 10px;
`;
export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.COLORS.medium_contrast};
 
`;

export const EmailContainer = styled.View`
width:90% ;
align-items: center;
  justify-content: center;
  align-self:center ;
background-color: ${({theme})=> theme.COLORS.light_tint} ;
margin: 15px 0;
padding: 10px;

`;

export const ButtonContainer = styled.View`
  width:90% ;
  align-self:center ;
`;
