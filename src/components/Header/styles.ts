import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface Props {
  active: boolean;
}
export const Container = styled.View`
margin: 0 5px;
padding: 5px 0;
  background-color: ${({ theme }) => theme.COLORS.light_background};
border-bottom-width: 0.2px ;
border-bottom-color: ${({ theme }) => theme.COLORS.light_shade};
`;

export const HeaderContent = styled.View`
  width: 100%;
  align-self:center ;
  justify-content: space-evenly;

  flex-direction: row;

  height: 50px;
`;
export const HeaderButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin: 0 5px;
`;

export const Categories = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator:false
})``;

export const CategoryButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  height: 30px;
`;

export const CategoryLabel = styled.Text<Props>`
  font-family: ${({ theme }) => theme.FONTS.TEXT_BOLD};
  font-size: ${RFValue(14)}px;

  text-transform: uppercase;
  color: ${({ theme, active }) =>
    active ? theme.COLORS.light_contrast : theme.COLORS.medium_contrast};
  margin: 0 4px;

  border-bottom-width: ${({ active }) => (active ? 2 : 0)}px;

  border-bottom-color: black;
`;
