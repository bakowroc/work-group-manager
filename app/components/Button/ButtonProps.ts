export interface ButtonProps {
  label: string | JSX.Element;
  buttonClassName?: string;
  contentClassName?: string;
  flat: boolean;
  type?: string;
  onClick?: (event: any) => void;
}
