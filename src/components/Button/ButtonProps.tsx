import React from 'react';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  inverted?: boolean;
}
