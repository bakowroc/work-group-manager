export interface ConfirmDispatchProps {
  closeConfirm: () => void;
}
export interface ConfirmStateProps {
  isOpen: boolean;
  label?: string;
  message?: string;
  onConfirm: () => void;
}
