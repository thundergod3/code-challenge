export type IFormHelper = {
  type: string;
  name: string;
  label?: string;
  placeholder?: string;
  fieldProps?: any;
  required?: boolean;
  error?: boolean;
  errorMessage?: string;
};
