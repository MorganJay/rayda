import { useAppDispatch } from '../../app/hooks';
import { addProduct } from '../../features/cart/cartSlice';
import { ProductCardProps } from '../../constants/types';

import {
  Wrapper,
  DetailsContainer,
  CartContainer,
  StockWarning,
  Image,
} from './styles';

import { CartIcon } from '../../assets';

import { affixDecimals, getCurrencySymbol } from '../../utils/productFunctions';

const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useAppDispatch();

  const { image, name, price, priceCurrency, quantity } = product;

  return (
    <Wrapper quantity={quantity}>
      {quantity <= 0 ? (
        <StockWarning>OUT OF STOCK</StockWarning>
      ) : (
        <CartContainer onClick={() => dispatch(addProduct(product))}>
          <CartIcon fill="#ffffff" />
        </CartContainer>
      )}
      <Image src={image} alt={name} />
      <DetailsContainer quantity={quantity}>
        {name} <br />
        <span>
          {getCurrencySymbol(priceCurrency)}
          {affixDecimals(price)}
        </span>
      </DetailsContainer>
    </Wrapper>
  );
};

export default ProductCard;
