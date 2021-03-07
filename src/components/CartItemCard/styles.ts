import styled from 'styled-components/native';

export const Container = styled.View`
  top: 35px;
  left: 40px;
  flex-direction: row;
  justify-content: space-between;
  height: 111px;
  width: 80%;
  border: 2px;
  border-color: #ddd;
  /* elevation: 2; */
`;

export const IternalContainerLeft = styled.View`
  left: 20px;
  top: 10px;
  width: 200px;
`;

export const IternalContainerRight = styled.View`
  margin-top: 5px;
  right: 20px;
`;

export const Img = styled.Image`
  width: 80px;
  height: 70px;
`;

export const ProductName = styled.Text`
  font-size: 17px;
  font-weight: bold;
`;

export const InfoLabel = styled.Text`
  top: 10px;
  font-size: 17px;
  font-weight: 700;
`;
export const InternalText = styled.Text`
  font-size: 17px;
  font-weight: normal;
`;

export const Text = styled.Text`
  font-size: 30px;
`;

export const ButtonText = styled.Text`
  font-size: 17px;
  font-weight: 400;
`;

export const PriceText = styled.Text`
  font-size: 17px;
  color: #00aa95;
  font-weight: bold;
`;

export const RemoveItemButton = styled.TouchableOpacity`
  top: 18px;
  left: -3px;
  flex-direction: row;
  align-items: center;
`;
