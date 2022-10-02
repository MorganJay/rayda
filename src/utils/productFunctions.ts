export const getCurrencySymbol = (currencyText: string): string => {
  if (currencyText === 'USD') return '$';
  if (currencyText === 'EUR') return '&euro;';
  if (currencyText === 'JPY') return '&yen;';

  return 'NGN';
};

export const affixDecimals = (number: number): string => number.toFixed(2);
