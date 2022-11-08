import { Container } from './styles';
import apiDicionario from '../../services/api-dicionario';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import DropdownComponent from '../../components/DropdownComponent';

const SelectCSA: React.FC = () => {
const [rows, setRows] = useState([])
  useEffect(() => {
    const roger = async () => {
      try {
        const resp = await apiDicionario.get('csa');
        console.log(resp.data.rows);
        setRows(resp.data.rows)
        return resp;
      } catch (e) {
        console.log(e);
      }
    };
    roger();
  }, []);
  return (
    <Container>
      <DropdownComponent rows={rows} />
    </Container>
  );
};

export default SelectCSA;
