export interface ButtonProps {
  label: string | JSX.Element;
  buttonClassName?: string;
  flat: boolean;
  type?: string;
  onClick?: (event: any) => void;
}
