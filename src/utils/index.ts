import * as iPhoneHelper from './iphoneHelper';

const FORMAT = {
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
  style: 'currency',
  currency: 'BRL',
};

export { iPhoneHelper, FORMAT as priceFormat };
