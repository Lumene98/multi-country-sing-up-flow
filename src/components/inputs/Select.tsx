import baseClasses from "./baseClasses";

type SelectProps = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  error?: boolean;
  label?: string;
  required?: boolean;
  options?: string[];
};

const Select = (props: SelectProps) => {
  const selectClasses = `${baseClasses} ${props.error ? "border-red-500" : "border-gray-300"}`;

  return (
    <>
      {props.label && (
        <label className="mb-1 block text-sm font-medium text-gray-700">
          {props.label}{" "}
          {props.required && <span className="text-red-500">*</span>}
        </label>
      )}

      <select
        className={selectClasses}
        value={props.value}
        onChange={props.onChange}
        required={props.required}
      >
        {props.options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
