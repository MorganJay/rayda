import styled, { css } from 'styled-components';
import { ProductDetailProps } from '../components/ProductDetail/ProductDetailsProps';

import { primaryColor } from '../constants/variables.styles';

/**
 * HOC that adds a `Wrapper` component with a hover effect if
 * `props.title==='color'`
 * @param WrappedComponent component to be selectively wrapped
 * @returns an unwrapped component if `title` is not color
 */
export function withWhiteBorder<P>(WrappedComponent: React.ComponentType<P>) {
  const BorderWrapped = (props: P & ProductDetailProps) => {
    if (props.title === 'color') {
      return (
        <Wrapper
          choice={props.choice}
          color={props.color}
          width={props.width}
          height={props.height}
        >
          <WrappedComponent {...props} />
        </Wrapper>
      );
    }

    return <WrappedComponent {...props} />;
  };

  return BorderWrapped;
}

const activeStyles = css`
  border: 1px solid ${primaryColor};
`;

const inactiveStyles = css`
  &:hover {
    border: 1px solid ${primaryColor};
  }
`;

const getActiveStyles = ({ choice, color }: ProductDetailProps) =>
  choice === color ? activeStyles : inactiveStyles;

const Wrapper = styled.div<ProductDetailProps>`
  width: ${props => props.width || 1}rem;
  height: ${props => props.height || 1}rem;
  ${getActiveStyles}
`;
