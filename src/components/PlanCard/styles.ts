import styled from 'styled-components/native';

export const Card = styled.View.attrs({
  shadowOffset: { height: 0, width: 0 },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,
  elevation: 1,
})`
  width:84%;
  height: 75%;
  flex-direction: column;
  border-bottom-width: 0px;
  background-color: white;
  margin-left: 8%;
  margin-right: 8%;
  padding: 8px;
  border-radius: 4px;
  border-width: 0px;
  align-self: stretch;
  margin-bottom: 14px;
`;

export const Image = styled.Image`
align-self: stretch;
height: 130px;
width: 100%;
margin-bottom: 8px;
border-radius: 3px;
`;


export const Info = styled.Text`
  font-size: 20px;
`;
export const InfoView = styled.View`
  flex-direction: row;
  margin-left: 10px;
  margin-top: 2px;
`;

export const InfoTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
