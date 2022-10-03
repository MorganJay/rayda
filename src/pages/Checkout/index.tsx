import { useAppSelector } from '../../app/hooks';
import Button from '../../components/Button';
import CheckoutItem from '../../components/CheckoutItem';
import {
  selectCartState,
  selectCartStateItemsCount,
  selectCartStateTotal,
} from '../../features/cart/cartSlice';

import { Container, Heading, PriceBreakdown, Total } from './styles';
import { CheckoutItemsContainer } from '../../components/ProductDetailSelector/styles';
import { selectCurrencyState } from '../../features/currency/currencySlice';
import {
  affixDecimals,
  convertCurrencyValue,
} from '../../utils/productFunctions';

const CheckoutPage = () => {
  const { products } = useAppSelector(selectCartState);
  const { currency, symbol } = useAppSelector(selectCurrencyState);
  const count = useAppSelector(selectCartStateItemsCount);

  const total = useAppSelector(selectCartStateTotal);

  const tax = 0.21 * total;

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
        <Button>ORDER</Button>
      </PriceBreakdown>
    </Container>
  );
};

export default CheckoutPage;
