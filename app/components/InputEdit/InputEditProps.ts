export interface InputEditProps {
  text?: string;
  inputClassName: string;
  useEnterToLeave: boolean;
  blockOutClickLeave?: boolean;
  onLeave: (value: any) => any;
  placeholder?: string;
  maxInputLength?: number;
  eraseOnLeave?: boolean;
}
