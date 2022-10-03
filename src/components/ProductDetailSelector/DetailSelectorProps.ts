export interface LabelTextProps {
  labelSize?: string;
  labelWeight?: string;
  textTransform?: string;
  fontFamily?: string;
}

export interface DetailSelectorProps extends LabelTextProps, SelectorProps {
  label: string;
  items: string[];
  selectedItem?: string;
  onSelect: (item: string) => void;
}

export interface SelectorProps {
  selectorWidth?: string;
  selectorHeight?: string;
}
