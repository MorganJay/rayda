export const getCurrencySymbol = (currencyText: string): string => {
  if (currencyText === 'USD') return '$';
  if (currencyText === 'EUR') return '€';
  if (currencyText === 'JPY') return '¥';

  return 'NGN';
};

export const affixDecimals = (number: number): string =>
  number.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

export const convertCurrencyValue = (
  amount: number,
  currency: string,
  targetCurrency: string
): number => {
  if (currency === 'USD' && targetCurrency === 'EUR') return amount * 1.02;
  if (currency === 'USD' && targetCurrency === 'JPY') return amount * 144.76;
  if (currency === 'EUR' && targetCurrency === 'JPY') return amount * 141.83;
  if (currency === 'EUR' && targetCurrency === 'USD') return amount * 0.98;
  if (currency === 'JPY' && targetCurrency === 'USD') return amount * 0.0069;
  if (currency === 'JPY' && targetCurrency === 'EUR') return amount * 0.007;

  return amount;
};
