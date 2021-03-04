import styled from 'styled-components/native';

export const Container = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,

  elevation: 1,
})`
  height: 138px;
  flex-direction: column;
  border-bottom-width: 0px;
`;

export const TextButtonView = styled.View`
  height: 70px;
  align-items: center;
`;

export const HistoryInfo = styled.View``;

export const SellerName = styled.Text`
  font-size: 17px;
`;
export const InfoView = styled.View`
  flex-direction: row;
`;

export const InfoTitle = styled.Text`
  font-size: 17px;
  font-weight: bold;
`;

export const ProductData = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: #00aa95;
`;
