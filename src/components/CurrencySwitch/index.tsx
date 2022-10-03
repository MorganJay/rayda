import { Wrapper } from './styles';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  selectCurrencyState,
  toggleSwitchHidden,
} from '../../features/currency/currencySlice';

import { Up, Down } from '../../assets';

const CurrencySwitcher = () => {
  const dispatch = useAppDispatch();
  const { symbol, toggleHidden } = useAppSelector(selectCurrencyState);

  return (
    <Wrapper onClick={() => dispatch(toggleSwitchHidden())}>
      {symbol} {!toggleHidden ? <Up /> : <Down />}
    </Wrapper>
  );
};

export default CurrencySwitcher;
