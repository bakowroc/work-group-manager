export interface ButtonProps {
  label: string | JSX.Element;
  buttonClassName?: string;
  contentClassName?: string;
  flat: boolean;
  onClick: () => void;
}
