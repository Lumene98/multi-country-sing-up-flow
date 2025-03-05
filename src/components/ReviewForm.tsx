import { COUNTRIES } from "../types";
import Button from "./inputs/Button";

type ReviewFormProps = {
  country: COUNTRIES;
  formData: Record<string, string>;
  clearForm: () => void;
  handleNextStep: () => void;
  handleBackStep: () => void;
};

const ReviewForm = (props: ReviewFormProps) => {
  const { country, formData, clearForm, handleNextStep } = props;

  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-4 text-2xl font-bold">Review Your Information</h2>
      <p className="mb-4">Country: {country}</p>
      <ul className="mb-4">
        {Object.entries(formData)
          .filter(([key]) => key !== "profileImage")
          .map(([key, value]) => (
            <li key={key} className="mb-2">
              <strong>{key}:</strong> {value}
            </li>
          ))}
        <li className="mb-2">
          <img
            src={formData.profileImage}
            alt="Profile"
            className="h-24 w-24 rounded-full"
          />
        </li>
      </ul>
      <div className="flex space-x-4">
        <Button
          label="Back"
          onClick={props.handleBackStep}
          variant="secondary"
        />
        <Button label="Clear" onClick={clearForm} variant="secondary" />
        <Button label="Submit" onClick={handleNextStep} variant="primary" />
      </div>
    </div>
  );
};

export default ReviewForm;
