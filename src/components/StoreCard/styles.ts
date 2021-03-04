import styled from 'styled-components/native';
//import FastImage from 'react-native-fast-image';

export const Card = styled.View.attrs({
  shadowOffset: { height: 0, width: 0 },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,
  elevation: 1,
})`
  width:80%;
  height: 53%;
  flex-direction: column;
  border-bottom-width: 0px;
  background-color: white;
  margin-left: 10%;
  margin-right: 10%;
  padding: 8px;
  border-radius: 4px;
  border-width: 0px;
  align-items: center;
  align-self: stretch;
  margin-bottom: 14px;
`;

export const Image = styled.Image`
align-self: stretch;
height: 120px;
margin-bottom: 8px;
border-radius: 3px;
`;
export const TitleCard = styled.Text`
  color: #000000;
  font-size: 16px;
  align-self: stretch;
`;

export const LocationCard = styled.Text`
  color: #000000;
  font-size: 14px;
  align-self: stretch;
  margin-left: 3%;
`;
