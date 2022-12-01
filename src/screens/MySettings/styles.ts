import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.light_tint};
`;
export const Content = styled.View`
  width: 100%;
  margin: 5px 0;
  padding: 0 5px;
`;
