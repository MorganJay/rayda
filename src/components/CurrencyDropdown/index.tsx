import currencies from '../../assets/data/currencies';
import { Wrapper, ListItem } from './styles';
import { getCurrencySymbol } from '../../utils/productFunctions';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  selectCurrencyState,
  switchCurrency,
} from '../../features/currency/currencySlice';

const CurrencyDropdown = () => {
  const { currency } = useAppSelector(selectCurrencyState);
  const dispatch = useAppDispatch();

  return (
    <Wrapper>
      {currencies.map((curr, i) => (
        <ListItem
          key={i}
          defaultChecked={curr === currency}
          onClick={() => dispatch(switchCurrency(curr))}
        >
          {getCurrencySymbol(curr)} {curr}
        </ListItem>
      ))}
    </Wrapper>
  );
};

export default CurrencyDropdown;
