export interface InputEditProps {
  text: string;
  inputClassName: string;
  useEnterToLeave: boolean;
  onLeave: (event: any) => any;
  placeholder?: string;
  maxInputLength?: number;
}
