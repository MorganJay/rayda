import { Wrapper, ItemsWrapper } from './styles';
import ProductDetail from '../ProductDetail/index';

export interface DetailSelectorProps {
  label: string;
  items: string[];
  selectedItem?: string;
}

const DetailSelector = ({
  label,
  items,
  selectedItem,
}: DetailSelectorProps) => {
  return (
    <Wrapper>
      {label}:
      <ItemsWrapper>
        {items.map((item, idx) => (
          <ProductDetail key={idx} title={label} choice={selectedItem} color={item}>
            {item}
          </ProductDetail>
        ))}
      </ItemsWrapper>
    </Wrapper>
  );
};

export default DetailSelector;
