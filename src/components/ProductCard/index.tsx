import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addProduct } from '../../features/cart/cartSlice';
import { selectCurrencyState } from '../../features/currency/currencySlice';

import { ProductCardProps } from '../../constants/types';

import {
  Wrapper,
  DetailsContainer,
  CartContainer,
  StockWarning,
  Image,
} from './styles';

import { CartIcon } from '../../assets';

import {
  affixDecimals,
  convertCurrencyValue,
} from '../../utils/productFunctions';

const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { currency, symbol } = useAppSelector(selectCurrencyState);
  const { image, name, price, priceCurrency, quantity } = product;

  const displayPrice = `${symbol}${affixDecimals(
    convertCurrencyValue(price, priceCurrency, currency)
  )}`;

  return (
    <Wrapper quantity={quantity}>
      {quantity <= 0 ? (
        <StockWarning>OUT OF STOCK</StockWarning>
      ) : (
        <CartContainer onClick={() => dispatch(addProduct(product))}>
          <CartIcon fill="#ffffff" />
        </CartContainer>
      )}
      <Image
        src={image}
        alt={name}
        onClick={() => navigate(`/product/${product.id}`)}
      />
      <DetailsContainer quantity={quantity}>
        {name} <br />
        <span>{displayPrice}</span>
      </DetailsContainer>
    </Wrapper>
  );
};

export default ProductCard;
