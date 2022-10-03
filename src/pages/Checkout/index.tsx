import { usePaystackPayment } from 'react-paystack';

import Button from '../../components/Button';
import CheckoutItem from '../../components/CheckoutItem';
import { CheckoutItemsContainer } from '../../components/ProductDetailSelector/styles';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  clearProducts,
  selectCartState,
  selectCartStateItemsCount,
  selectCartStateTotal,
} from '../../features/cart/cartSlice';

import { selectCurrencyState } from '../../features/currency/currencySlice';
import {
  affixDecimals,
  convertCurrencyValue,
} from '../../utils/productFunctions';

import { Container, Heading, PriceBreakdown, Total } from './styles';
import { useNavigate } from 'react-router-dom';

const config = (amount: number) => {
  return {
    email: 'jetmorgan.jm@gmail.com',
    amount: amount * 100,
    publicKey: 'pk_test_9e9d930b47b52c11fdc0dac36cf5c8227e44b305',
  };
};

const CheckoutPage = () => {
  const total = useAppSelector(selectCartStateTotal);
  const { products } = useAppSelector(selectCartState);
  const count = useAppSelector(selectCartStateItemsCount);
  const { currency, symbol } = useAppSelector(selectCurrencyState);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const tax = 0.21 * total;
  const initializePayment = usePaystackPayment(config(total + tax));

  const displayPrice =
    symbol +
    (products?.length
      ? affixDecimals(
        convertCurrencyValue(total + tax, products[0].priceCurrency, currency)
      )
      : '0.00');

  const displayTax =
    symbol +
    (products?.length
      ? affixDecimals(
        convertCurrencyValue(tax, products[0].priceCurrency, currency)
      )
      : '0.00');

  const onSuccess = () => {
    alert('Thanks for doing business with us! Come back soon!!');
    navigate('/');
    dispatch(clearProducts());
  };

  const onClose = () =>
    alert('Wait! You need our accessories 🙏, don\'t go!!!!');

  return (
    <Container>
      <Heading>CART</Heading>
      <CheckoutItemsContainer>
        {products.length ? (
          products.map(cartItem => (
            <CheckoutItem key={cartItem.id} product={cartItem} />
          ))
        ) : (
          <h1>Your bag is empty</h1>
        )}
      </CheckoutItemsContainer>
      <PriceBreakdown>
        <p>
          Tax 21%: <span>{displayTax}</span>
        </p>
        <p>
          Quantity: <span>{count}</span>
        </p>
        <Total>
          Total: <span>{displayPrice}</span>
        </Total>
        <Button onClick={() => initializePayment(onSuccess, onClose)}>ORDER</Button>
      </PriceBreakdown>
    </Container>
  );
};

export default CheckoutPage;
