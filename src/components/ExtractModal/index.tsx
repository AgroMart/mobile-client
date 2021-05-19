import React, { useMemo } from 'react';
import { Feather } from '@expo/vector-icons';

import { format } from 'date-fns';
import {
  Modal,
  ContainerClose,
  ButtonClose,
  Container,
  InfoView,
  InfoTitle,
  InfoText,
  GreenTitle,
  GreenInfo,
} from './styles';
import { priceFormat } from '../../utils';

interface Register {
  id: string;
  itens: string;
  valor: number;
  entregue: false;
  tipo_de_entrega: string;
  loja: {
    id: string;
    nome: string;
    descricao: string;
    banner: string;
    tipos_de_entrega: string;
    contato: string;
    cnpj: string;
    usuario: string;
    extratos: [string];
    endereco: string;
    produtos_avulsos: [string];
    planos: [string];
    cestas: [string];
    published_at: string;
    created_by: string;
    updated_by: string;
  };
  user: {
    id: string;
    username: string;
    email: string;
    provider: string;
    password: string;
    resetPasswordToken: string;
    confirmationToken: string;
    confirmed: true;
    blocked: true;
    role: string;
    loja: string;
    extratos: [string];
    endereco: string;
    assinantes: [string];
    created_by: string;
    updated_by: string;
  };
  pagamento_realizado: false;
  created_at: string;
}

interface Product {
  valor: number;
  produto: string;
  quantidade: number;
}

interface ExtractModalProps {
  handleModal(): void;
  isVisibleModal: boolean;
  extract: Register;
}

const ExtractModal: React.FC<ExtractModalProps> = ({
  handleModal,
  isVisibleModal,
  extract,
}) => {
  const products = useMemo((): Product[] => {
    const parsed = JSON.parse(JSON.stringify(extract.itens));

    return parsed.produtos;
  }, [extract]);

  return (
    <Modal
      animationIn="zoomIn"
      animationOut="zoomOut"
      isVisible={isVisibleModal}
      onBackButtonPress={handleModal}
      onSwipeComplete={handleModal}
    >
      <ContainerClose>
        <ButtonClose onPress={handleModal}>
          <Feather name="x-circle" size={29} style={{ color: '#fff' }} />
        </ButtonClose>
      </ContainerClose>

      <Container>
        <InfoTitle style={{ marginBottom: 10 }}>Informações gerais </InfoTitle>
        <InfoView>
          <InfoTitle>Vendedor: </InfoTitle>
          <InfoText numberOfLines={1}>{extract.loja.nome}</InfoText>
        </InfoView>
        <InfoView>
          <InfoTitle>Data da compra: </InfoTitle>
          <InfoText numberOfLines={1}>
            {format(new Date(extract.created_at), 'dd/MM/yyyy')}
          </InfoText>
        </InfoView>
        <InfoView>
          <GreenTitle>Valor: </GreenTitle>
          <GreenInfo>
            {extract.valor.toLocaleString('pt-BR', priceFormat)}
          </GreenInfo>
        </InfoView>
        <InfoView>
          <InfoTitle>Pagamento realizado: </InfoTitle>
          <InfoText numberOfLines={1}>
            {extract.pagamento_realizado ? 'sim' : 'não'}
          </InfoText>
        </InfoView>
        <InfoView>
          <InfoTitle>Produto entregue: </InfoTitle>
          <InfoText numberOfLines={1}>
            {extract.pagamento_realizado ? 'sim' : 'não'}
          </InfoText>
        </InfoView>
        <InfoTitle style={{ marginVertical: 10 }}>Items</InfoTitle>
        {products.map(item => (
          <>
            <InfoView>
              <InfoTitle>Produto: </InfoTitle>
              <InfoText numberOfLines={1}>{item.produto}</InfoText>
            </InfoView>
            <InfoView>
              <InfoTitle>Quantidade: </InfoTitle>
              <InfoText numberOfLines={1}>{item.quantidade}</InfoText>
            </InfoView>
            <InfoView>
              <GreenTitle>Valor: </GreenTitle>
              <GreenInfo>
                {item.valor.toLocaleString('pt-BR', priceFormat)}
              </GreenInfo>
            </InfoView>
          </>
        ))}
      </Container>
    </Modal>
  );
};

export default ExtractModal;
