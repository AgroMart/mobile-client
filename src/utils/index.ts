/* eslint-disable no-param-reassign */
import * as iPhoneHelper from './iphoneHelper';

const defaultOptions = {
  significantDigits: 2,
  thousandsSeparator: '.',
  decimalSeparator: ',',
  symbol: 'R$',
};

const currencyFormatter = (value: number | string) => {
  if (typeof value !== 'number') value = 0.0;
  value = value.toFixed(defaultOptions.significantDigits);

  const [currency, decimal] = value.split('.');
  return `${defaultOptions.symbol} ${currency.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    defaultOptions.thousandsSeparator,
  )}${defaultOptions.decimalSeparator}${decimal}`;
};

export { iPhoneHelper, currencyFormatter as priceFormat };
