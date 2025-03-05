import { useEffect, useState } from "react";
import { COUNTRIES } from "../types";

const useFormData = () => {
  const [country, setCountry] = useState<COUNTRIES | "">("");
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<Record<string, string>>({});

  useEffect(() => {
    const savedFormData = localStorage.getItem("formData");
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }

    const savedCountry = localStorage.getItem("country");
    if (savedCountry) {
      setCountry(savedCountry as COUNTRIES);
    }

    const savedStep = localStorage.getItem("step");
    if (savedStep) {
      setStep(parseInt(savedStep));
    }
  }, []);

  const updateCountry = (newCountry: COUNTRIES) => {
    setCountry(newCountry);
    setFormData({});
    localStorage.removeItem("formData");
    localStorage.setItem("country", newCountry);
  };

  const updateFormData = (field: string, value: string) => {
    const newFormData = { ...formData, [field]: value };
    setFormData(newFormData);
    localStorage.setItem("formData", JSON.stringify(newFormData));
  };

  const getFormValue = (field: string) => {
    return formData[field] || "";
  };

  const updateStep = (newStep: number) => {
    setStep(newStep);
    localStorage.setItem("step", newStep.toString());
  };

  const clearForm = () => {
    setCountry("");
    setStep(1);
    setFormData({});
    localStorage.removeItem("country");
    localStorage.removeItem("step");
    localStorage.removeItem("formData");
  };

  return [
    country,
    updateCountry,
    step,
    updateStep,
    getFormValue,
    updateFormData,
    clearForm,
    formData,
  ] as const;
};

export default useFormData;
