import baseClasses from "./baseClasses";

type TextProps = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  error?: boolean;
  label?: string;
  required?: boolean;
  placeholder?: string;
  errorMessage?: string;
};

const Text = (props: TextProps) => {
  const inputClasses = `${baseClasses} ${props.error ? "border-red-500" : "border-gray-300"}`;

  return (
    <>
      <input
        className={inputClasses}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        type="text"
        required={props.required}
      />

      {props.error && (
        <span className="mt-1 text-sm text-red-500">{props.errorMessage}</span>
      )}
    </>
  );
};

export default Text;
