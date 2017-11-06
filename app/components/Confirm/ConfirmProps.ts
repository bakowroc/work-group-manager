export interface ConfirmDispatchProps {
  toggleConfirm: (payload?: any) => void;
}
export interface ConfirmStateProps {
  isOpen: boolean;
  label?: string;
  message?: string;
  onConfirm: () => void;
}
