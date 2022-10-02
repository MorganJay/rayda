import styled from 'styled-components';

import { ProductDetailProps } from '../constants/types';
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
        <Wrapper>
          <WrappedComponent {...props} />
        </Wrapper>
      );
    }

    return <WrappedComponent {...props} />;
  };

  return BorderWrapped;
}

const Wrapper = styled.div`
  width: 1rem;
  height: 1rem;
  display: grid;
  place-items: center;
  &:hover {
    border: 1px solid ${primaryColor};
  }
`;
