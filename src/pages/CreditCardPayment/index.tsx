import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Clipboard from '@react-native-community/clipboard'
import '@expo/browser-polyfill';
import JunoCardHash from 'react-native-juno-rn-card-hash';

/**
 * Create JunoCardHash Instace
 * @string publicToken
 * @string environment (sandbox|production)
 */
const Juno = new JunoCardHash('F457DFE393E04EEC86A8A9C4CA0204D0B58C7FF68A21938282610BBA663A7E49', 'sandbox');

  const CreditCardPayment: React.FC = () => {
  const [hash, setHash] = useState<string | undefined>('');
  const [error, setError] = useState<any | undefined>();

  useEffect(() => {
    const cardData = {
      cardNumber: '52619294',
      holderName: 'Foo bar',
      securityCode: '265',
      expirationMonth: '11',
      expirationYear: '2021',
    };

    // const cardData = {
    //   holderName: "Byron K B Coorea",
    //   cardNumber: "5162929492536134",
    //   securityCode: "528",
    //   expirationMonth: "04",
    //   expirationYear: "2030",
    // };

    // Generate Card Hash
    Juno.getCardHash(cardData)
      .then(setHash)
      .catch((e) => setError(e));
  }, []);

  const handleCopy = useCallback((string?: string) => {
    if (!string) return;
    Clipboard.setString(string);
  }, []);

  return (
    <View style={styles.container}>
      {!error ? (
        <>
          <Text style={styles.text}>
            Card Hash: {`\n\n`} {hash}
          </Text>
          <Button title="Copy" onPress={() => handleCopy(hash)} />
        </>
      ) : (
        <Text style={styles.text}>
          An error ocurred: {'\n\n'}
          {error.message}
          {'\n\n'}
          {JSON.stringify(error.details)}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  },
});

export default CreditCardPayment;
