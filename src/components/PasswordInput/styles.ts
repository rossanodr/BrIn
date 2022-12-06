import styled from 'styled-components/native';
import { TextInput } from 'react-native-paper';

export const Container = styled.View`
  
  background-color: ${({theme})=> theme.COLORS.light_background} ;
`;

export const InputText = styled(TextInput).attrs(({
    theme
})=> ({
    activeUnderlineColor: theme.COLORS.medium_contrast,
    underlineColor: theme.COLORS.medium_contrast,
}))`
  background-color: ${({theme})=> theme.COLORS.light_background} ;
  margin: 10px ;

`;