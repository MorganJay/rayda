export interface ToggleSize {
  buttonSize?: string;
  fontSize?: string;
}

export interface QuantityTogglerProps extends ToggleSize {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}
