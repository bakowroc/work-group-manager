export interface ConfirmProps {
  label?: string;
  message?: string;
  onConfirm: () => void;
}
export interface ConfirmDispatchProps {
  toggleConfirm: () => void;
}
export interface ConfirmStateProps {
  isOpen: boolean;
}
