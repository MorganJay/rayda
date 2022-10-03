import { ProductDetailProps } from './ProductDetailsProps';
import { withWhiteBorder } from '../../utils/withWhiteBorder';
import { Container } from './styles';

const ProductDetail = ({
  title,
  choice,
  color,
  children,
  ...props
}: ProductDetailProps) => {
  return (
    <Container
      {...props}
      title={title}
      color={color}
      defaultChecked={choice === children || choice === color}
    >
      {title !== 'color' && children}
    </Container>
  );
};

export default withWhiteBorder(ProductDetail);
