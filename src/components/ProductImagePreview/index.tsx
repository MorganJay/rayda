import { ProductCardProps } from '../../constants/types';

import { Wrapper, PreviewImage } from './styles';

const ProductImagePreview = ({ product }: ProductCardProps) => {
  const { image, name } = product;

  return (
    <Wrapper>
      <PreviewImage src={image} alt={name} />
      <PreviewImage src={image} alt={name} />
      <PreviewImage src={image} alt={name} />
    </Wrapper>
  );
};

export default ProductImagePreview;
