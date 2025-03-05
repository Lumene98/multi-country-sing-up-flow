import { ChangeEvent, useMemo } from "react";
import { Step } from "../types";
import Input from "./StepInput";
import Button from "./inputs/Button";

type GenericStepFormProps = {
  step: Step;
  setValue: (field: string, value: string) => void;
  value: string;
  handleNextStep: () => void;
  handleBackStep: () => void;
  clearForm: () => void;
};

const GenericStepForm = (props: GenericStepFormProps) => {
  const error = useMemo(() => {
    if (props.step.validate) {
      return !props.step.validate(props.value);
    }
    return false;
  }, [props.value, props.step]);

  const handleValueChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    props.setValue(props.step.field, e.target.value);
  };

  return (
    <form
      id={"form-" + props.step.field}
      className="space-y-4 rounded-md bg-white p-4 shadow-md"
      onSubmit={(e) => e.preventDefault()}
    >
      <label className="block text-lg font-medium text-gray-700">
        {props.step.title}
      </label>
      <Input
        {...props.step}
        error={error}
        value={props.value}
        onChange={handleValueChange}
      ></Input>
      <div className="flex space-x-2">
        <Button
          variant="secondary"
          label="Back"
          onClick={props.handleBackStep}
        ></Button>
        <Button variant="red" label="Clear" onClick={props.clearForm}></Button>
        <Button
          label="Next"
          onClick={props.handleNextStep}
          disabled={error}
          variant="primary"
        ></Button>
      </div>
    </form>
  );
};

export default GenericStepForm;
