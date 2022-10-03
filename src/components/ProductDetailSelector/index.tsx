import ProductDetail from '../ProductDetail';
import { DetailSelectorProps } from './DetailSelectorProps';

import { Wrapper, ItemsWrapper, Label } from './styles';

const DetailSelector = ({
  label,
  labelSize,
  labelWeight,
  items,
  selectedItem,
  textTransform,
  onSelect,
  selectorHeight,
  selectorWidth,
  fontFamily,
}: DetailSelectorProps) => {
  return (
    <Wrapper>
      <Label
        labelSize={labelSize}
        textTransform={textTransform}
        labelWeight={labelWeight}
        fontFamily={fontFamily}
      >
        {label}:
      </Label>
      <ItemsWrapper>
        {items.map((item, idx) => (
          <ProductDetail
            key={idx}
            title={label}
            width={selectorWidth}
            choice={selectedItem}
            color={item}
            height={selectorHeight}
            onClick={() => onSelect(item)}
          >
            {item}
          </ProductDetail>
        ))}
      </ItemsWrapper>
    </Wrapper>
  );
};

export default DetailSelector;
