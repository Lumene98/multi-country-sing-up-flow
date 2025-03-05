import Select from "./inputs/Select";
import Text from "./inputs/Text";

type StepInputProps = {
  placeholder?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
  validate?: (value: string) => boolean;
  errorMessage?: string;
  error?: boolean;
  type: "text" | "select";
  label?: string;
  required?: boolean;
  options?: string[];
};

const StepInput = (props: StepInputProps) => {
  return (
    <div className="mb-4">
      {props.type === "text" ? <Text {...props} /> : <Select {...props} />}
    </div>
  );
};

export default StepInput;
