/* eslint-disable camelcase */
export interface Store {
  id: number;
  nome: string;
  descricao: string;
  banner: Image;
  tipos_de_entrega: 'Entrega' | 'Retirada';
  contato: string;
  cnpj: string;
  endereco: Address;
  produtos_avulsos: Product[];
  planos: Plan[];
  cestas: Cest[];
}

export interface Image {
  id: string;
  name: string;
  alternativeText: string;
  url: string;
}

export interface Address {
  id: string;
  cidade: string;
  bairro: string;
  numero: number;
  complemento: string;
  cep: string;
  rua: string;
  loja: string;
}

export interface Product {
  id: string;
  nome: string;
  image: Image;
  unidade_medida: string;
  descricao: string;
  valor: number;
  quantidade: number;
}

export interface Plan {
  id: string;
  nome: string;
  descricao: string;
  valor: number;
  quantidade_de_cestas: number;
  quantidade: number;
}

export interface Cest {
  id: string;
  valor: number;
  quantidade: number;
  descricao: string;
  item_da_cesta: Product[];
}
