import { useState } from 'react';
import { ReactComponent as Down } from '../../assets/images/Vectordown.svg';
import { ReactComponent as Up } from '../../assets/images/Vectorup.svg';

import { Wrapper } from './styles';

const CurrencySwitcher = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const handleDropDownOpen = () => setDropDownOpen(!dropDownOpen);

  return (
    <Wrapper onClick={handleDropDownOpen}>
      $ {dropDownOpen ? <Up /> : <Down />}
    </Wrapper>
  );
};

export default CurrencySwitcher;
