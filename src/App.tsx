import { COUNTRY_CONFIGS } from "./data/countries";
import useFormData from "./hooks/useFormData";
import { COUNTRIES } from "./types";
import GenericStepForm from "./components/GenericStepForm";
import Select from "./components/inputs/Select";
import Button from "./components/inputs/Button";
import UploadImageForm from "./components/UploadImageForm";
import ReviewForm from "./components/ReviewForm";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [
    country,
    updateCountry,
    step,
    updateStep,
    getFormValue,
    updateFormData,
    clearForm,
    formData,
  ] = useFormData();

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <form className="space-y-4 rounded-md bg-white p-4 shadow-md">
            <h1 className="text-3xl font-bold">Choose a country</h1>
            <div className="grid grid-cols-2 gap-4">
              <Select
                value={country}
                onChange={(e) => updateCountry(e.target.value as COUNTRIES)}
                options={Object.keys(COUNTRY_CONFIGS)}
                label="Country"
                required
              ></Select>

              <Button
                variant="primary"
                label="Next"
                onClick={() => {
                  if (!country) updateCountry("USA");
                  updateStep(2);
                }}
              ></Button>
            </div>
          </form>
        );
      case 2:
      case 3:
      case 4:
        if (country && COUNTRY_CONFIGS[country].steps[step - 2]) {
          return (
            <GenericStepForm
              step={COUNTRY_CONFIGS[country].steps[step - 2]}
              setValue={updateFormData}
              value={getFormValue(
                COUNTRY_CONFIGS[country].steps[step - 2].field,
              )}
              handleNextStep={() => updateStep(step + 1)}
              handleBackStep={() => updateStep(step - 1)}
              clearForm={clearForm}
            />
          );
        } else {
          updateStep(1);
        }
        break;
      case 5:
        return (
          <UploadImageForm
            profileImage={formData.profileImage}
            setValue={updateFormData}
            clearForm={clearForm}
            handleBackStep={() => updateStep(4)}
            handleNextStep={() => updateStep(6)}
          />
        );
      default:
        if (country) {
          return (
            <ReviewForm
              country={country}
              formData={formData}
              clearForm={clearForm}
              handleNextStep={() => {
                clearForm();
                updateStep(1);
              }}
              handleBackStep={() => updateStep(5)}
            />
          );
        } else {
          updateStep(1);
        }
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      {renderStep()}
      <div className="mt-4 w-full max-w-md">
        <ProgressBar step={step} />
      </div>
    </div>
  );
}

export default App;
