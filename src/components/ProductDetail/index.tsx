import { ProductDetailProps } from '../../constants/types';
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
      defaultChecked={choice === children || choice === color}
      title={title}
      color={color}
    >
      {title !== 'color' && children}
    </Container>
  );
};

export default withWhiteBorder(ProductDetail);
