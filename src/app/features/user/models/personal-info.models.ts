export interface FormField {
  key: string;
  title: string;
  type?: 'text' | 'email' | 'date' | 'select';
  sub?: string;
  options?: string[];
}
