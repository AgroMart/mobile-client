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
  padding: 18px 10px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0;
  border-bottom-width: 0px;
`;

export const ProductInfo = styled.View`
  margin-bottom: 10px;
`;

export const ProductName = styled.Text`
  font-size: 20px;
  margin-top: 10px;
`;

export const InfoView = styled.View`
  flex-direction: row;
  align-items: baseline;
`;

export const ProductData = styled.Text`
  font-size: 17px;
  margin-top: 10px;
  color: #00aa95;
`;

export const ImageView = styled.View``;

export const ProductImage = styled.Image`
  width: 348px;
  height: 190px;
`;
