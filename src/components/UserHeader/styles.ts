import styled from 'styled-components/native';

export const Container = styled.View`
  top: 25px;
  flex-direction: row;
  align-items: center;
  height: 8%;
  width: 100%;
  border-bottom-width: 1px;
  border-color: #ddd;
`;

export const Img = styled.Image`
  left: 20px;
  width: 49px;
  height: 49px;
  border-radius: 49px;
  border: 2px;
`;
export const Text = styled.Text`
  font-size: 25px;
  left: 25px;
  color: ${props => (props.logged ? '#00AA95' : '#000')};
`;
