import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Alert, ScrollView, Text } from 'react-native';
import { Container, ViewSpacer, AnimationCircule } from './styles';
import LottieView from 'lottie-react-native';
import CreditCardForm, { FormModel } from 'rn-credit-card';
// import '@expo/browser-polyfill';
// import JunoCardHash from 'react-native-juno-rn-card-hash';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { ICreditCard } from '../../interfaces';

import initializeApi from '../../services/api';

// Components imports
import Button from '../../components/Button';
import Input from '../../components/Input';

// Context imports
import { useAuth } from '../../hooks/AuthProvider';
import { useCart } from '../../hooks/CartProvider';
import { StackNavigationProp } from '@react-navigation/stack';

// const PUBLIC_TOKEN = process.env.PUBLIC_TOKEN_JUNO;
// const JUNO_ENV =
  process.env.NODE_ENV === 'development' ? 'sandbox' : 'production';

interface StockParams {
  id: number;
  quantity: number;
  stock: number;
}

type NavigationProps = {
  History: undefined, 
}

const CreditCardPayment: React.FC = () => {
  const formMethods = useForm<FormModel>({
    mode: 'onBlur',
    defaultValues: {
      holderName: '',
      cardNumber: '',
      expiration: '',
      cvv: '',
    },
  });
  const [document, setDocument] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const { handleSubmit } = formMethods;
  const [loading, setLoading] = useState(false);

  const { user } = useAuth();
  const { storeId, getTotal } = useCart();
  const { cart, cleanUpCart } = useCart();

  const navigation = useNavigation<StackNavigationProp<NavigationProps>>();
  const route = useRoute<RouteProp<{ billingAddress: any }>>();

  const getCardHash = async (creditCardData: ICreditCard) => {
    // const juno = new JunoCardHash(PUBLIC_TOKEN as string, JUNO_ENV);

    const cardData = {
      holderName: creditCardData.holderName,
      cardNumber: creditCardData.cardNumber.replace(/\s/g, ''),
      securityCode: creditCardData.cvv,
      expirationMonth: creditCardData.expiration.split('/')[0],
      expirationYear: '20' + creditCardData.expiration.split('/')[1],
    };

    console.log('Cartao de credito', cardData);

    try {
      // const response = await juno.getCardHash(cardData);
      // console.log('Hash do cartão\n' + response + '\n');

      // return response;
    } catch (e: any) {
      console.log('Erro ao gerar hash do cartão', e);
    }
  };

  const sendSubscriberData = async () => {
    const updateStockRequestModifier = {
      produto: async (item: StockParams) => {
        try {
          const api = await initializeApi();

          const body = {
            quantidade: item.stock - item.quantity,
          };
          await api.put(`produtos-avulsos/${item.id}`, body);
        } catch (err) {
          console.log(err);
        }
      },
      cesta: async (item: StockParams) => {
        try {
          const body = {
            quantidade: item.stock - item.quantity,
          };
          const api = await initializeApi();

          await api.put(`cestas/${item.id}`, body);
        } catch (err) {
          console.log(err);
        }
      },
      plano: async (item: StockParams) => {
        try {
          const body = {
            quantidade: item.stock - item.quantity,
          };
          const api = await initializeApi();

          const response = await api.put(`planos/${item.id}`, body);

          const { id, quantidade_de_cestas } = response.data;

          const subscriberBody = {
            nome: user.username,
            cestas_disponiveis: quantidade_de_cestas,
            plano: id,
            usuario: user.id,
            loja: storeId,
          };

          await api.post('assinantes', subscriberBody);
        } catch (err) {
          console.log(err);
        }
      },
    };
    const extractBody = {
      valor: getTotal(),
      user: user.id,
      loja: storeId,
      itens: {
        produtos: [] as any,
      },
      pagamento_realizado: true,
    };
    cart.forEach(item => {
      updateStockRequestModifier[item.type](item);

      extractBody.itens = {
        produtos: [
          ...extractBody.itens.produtos,
          {
            produto: item.name,
            quantidade: item.quantity,
            valor: item.value,
          },
        ],
      };
    });

    try {
      const api = await initializeApi();

      await api.post('extratoes', extractBody);
      cleanUpCart();
    } catch (error) {
      console.log('Erro', error);
    }
  };

  const onSubmit = async (model: FormModel) => {
    setLoading(true);

    const cardHash = await getCardHash(model);
    const billingAddress = route?.params?.billingAddress;
    const birthDateSplited = birthDate.split('/');

    const currentDate = new Date();
    const currentMonth = Number(currentDate.getMonth());
    const month = currentMonth > 9 ? currentMonth : `0${currentMonth}`;
    const currentDay = Number(currentDate.getDate());
    const day = currentDay > 9 ? currentDay : `0${currentDay}`;

    const paymentData = {
      storeId,
      userId: user.id,
      creditCard: {
        hash: cardHash,
        cardholderName: model.holderName,
      },
      chargeData: {
        description: `Agromart`,
        amount: getTotal(),
        chargeData: `${currentDate.getFullYear()}-${month}-${day}`,
      },
      billingData: {
        name: model.holderName,
        document,
        email: user.email,
        birthDate: `${birthDateSplited[2]}-${birthDateSplited[1]}-${birthDateSplited[0]}`,
        ...billingAddress,
      },
    };

    try {
      const api = await initializeApi();

      const payment = await api.post('payment/credit-card', paymentData);
      await sendSubscriberData();

      if (payment.status === 200) {
        navigation.navigate('History');
      }
    } catch (error) {
      console.log('Erro ao processar pagamento', error);
      Alert.alert('Ops... ', 'Não foi possível prosseguir para o pagamento.');
    } finally {
      setLoading(false);
    }
  };

  const creditCardTranlations = {
    cardNumber: 'Número do cartão',
    cardHolderName: 'Nome do Titular',
    mmYY: 'MM/AA',
    expiration: 'Validade',
    securityCode: 'Código de Segurança (CVV)',
    cardNumberRequired: 'Número do cartão é obrigatório',
    cardNumberInvalid: 'O número do cartão parece ser inválido',
    cardHolderNameRequired: 'Nome do titular é obrigatório',
    cardHolderNameInvalid: 'Nome inválido do titular do cartão',
    expirationRequired: 'Data de validade é obrigatória',
    expirationInvalid: 'Data de validade não esta correta',
    securityCodeRequired: 'Código de segurança é obrigatório',
    securityCodeInvalid: 'Código de segurança inválido',
    nameSurname: 'Nome Sobrenome',
  };

  return (
    <Container>
      <ScrollView>
        <FormProvider {...formMethods}>
          <CreditCardForm
            LottieView={LottieView}
            horizontalStart
            inputColors={{
              focused: 'green',
            }}
            overrides={{
              input: {
                height: 60,
                paddingVertical: 5,
              },
            }}
            translations={creditCardTranlations}
          />
        </FormProvider>

        <Text>CPF do Titular</Text>
        <Input
          placeholder="CPF"
          autoCorrect={false}
          value={document}
          type="numeric"
          onChangeText={e => setDocument(e)}
        />

        <Text>Data de Nasciemnto do Titular</Text>
        <Input
          placeholder="Data"
          autoCorrect={false}
          value={birthDate}
          type="default"
          onChangeText={e => setBirthDate(e)}
        />
        <Button 
          // @ts-ignore
          onPress={handleSubmit(onSubmit)}>
          {loading ? <AnimationCircule /> : 'Realizar Pagamento'}
        </Button>

        <ViewSpacer />
      </ScrollView>
    </Container>
  );
};

export default CreditCardPayment;
