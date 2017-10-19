export interface InputEditProps {
  text: string;
  inputClassName: string;
  useEnterToLeave: boolean;
  onLeave: () => any;
  placeholder?: string;
  maxInputLength?: number;
}
