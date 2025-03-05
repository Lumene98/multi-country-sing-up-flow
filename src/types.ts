export type COUNTRIES = "USA" | "UAE" | "India" | "Germany" | "Canada";
export type Step = {
  field: string;
  title: string;
  type: "text" | "select";
  placeholder?: string;
  errorMessage?: string;
  required?: boolean;
  validate?: (value: string) => boolean;
  options?: string[];
};
export type CountryConfig = {
  steps: Step[];
};
