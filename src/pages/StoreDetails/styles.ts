import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
`;

export const Banner = styled.Image`
  width: 100%;
  height: 25.3%;
`;

export const Content = styled.View`
  width: 85%;
  margin: 0 auto;
`;

export const FarmName = styled.Text`
  margin-top: 1.6%;
  margin-bottom: 1%;
  font-size: 27px;
`;

export const ContactView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-color: #d3d3d3;
`;

export const City = styled.Text`
  margin-top: 1.6%;
  margin-bottom: 5%;
  color: gray;
  font-size: 20px;
`;

export const MessageIcon = styled.TouchableOpacity``;

export const DescriptionTitle = styled.Text`
  font-size: 22px;
  margin-top: 1%;
`;

export const DescriptionText = styled.Text`
  font-size: 18px;
  margin-top: 1%;
  padding-bottom: 10px;
  border-bottom-width: 1px;
  border-color: black;
`;
