import { COUNTRIES, CountryConfig } from "../types";

export const COUNTRY_CONFIGS: Record<COUNTRIES, CountryConfig> = {
  USA: {
    steps: [
      {
        field: "socialSecurity",
        title: "Social Security",
        type: "text",
        placeholder: "SSN",
        errorMessage: "Invalid SSN",
        required: true,
        validate: (value: string) => /^\d{3}-\d{2}-\d{4}$/.test(value),
      },
      {
        title: "State",
        field: "state",
        type: "select",
        options: ["California", "Texas", "New York", "Florida", "Illinois"],
        required: true,
      },
      {
        title: "Zip Code",
        field: "zipCode",
        type: "text",
        placeholder: "ZIP Code",
        errorMessage: "Invalid ZIP Code",
        validate: (value: string) => /^\d{5}(-\d{4})?$/.test(value),
        required: true,
      },
    ],
  },
  UAE: {
    steps: [
      {
        field: "emiratesId",
        title: "Emirates ID",
        type: "text",
        placeholder: "Emirates ID",
        errorMessage: "Invalid Emirates ID",
        required: true,
        validate: (value: string) => /^\d{3}-\d{4}-\d{7}-\d{1}$/.test(value),
      },
      {
        title: "Visa Type",
        field: "visaType",
        type: "select",
        options: ["Work Visa", "Student Visa", "Resident Visa", "Tourist Visa"],
        required: true,
      },
      {
        title: "City",
        field: "city",
        type: "text",
        placeholder: "City Name",
        required: true,
      },
    ],
  },
  India: {
    steps: [
      {
        field: "aadhaarNumber",
        title: "Aadhaar Number",
        type: "text",
        placeholder: "Aadhaar",
        errorMessage: "Invalid Aadhaar Number",
        required: true,
        validate: (value: string) => /^\d{4}\s\d{4}\s\d{4}$/.test(value),
      },
      {
        title: "State",
        field: "state",
        type: "select",
        options: ["Maharashtra", "Karnataka", "Tamil Nadu", "Delhi", "Gujarat"],
        required: true,
      },
      {
        title: "PIN Code",
        field: "pinCode",
        type: "text",
        placeholder: "PIN Code",
        errorMessage: "Invalid PIN Code",
        validate: (value: string) => /^\d{6}$/.test(value),
        required: true,
      },
    ],
  },
  Germany: {
    steps: [
      {
        field: "taxId",
        title: "Tax ID",
        type: "text",
        placeholder: "Tax Identification",
        errorMessage: "Invalid Tax ID",
        required: true,
        validate: (value: string) => /^\d{10}$/.test(value),
      },
      {
        title: "Bundesland",
        field: "bundesland",
        type: "select",
        options: ["Bayern", "NRW", "Baden-Württemberg", "Hessen", "Berlin"],
        required: true,
      },
      {
        title: "Postal Code",
        field: "postalCode",
        type: "text",
        placeholder: "Postal Code",
        errorMessage: "Invalid Postal Code",
        validate: (value: string) => /^\d{5}$/.test(value),
        required: true,
      },
    ],
  },
  Canada: {
    steps: [
      {
        field: "sin",
        title: "Social Insurance Number",
        type: "text",
        placeholder: "SIN",
        errorMessage: "Invalid SIN",
        required: true,
        validate: (value: string) => /^\d{3}\s\d{3}\s\d{3}$/.test(value),
      },
      {
        title: "Province",
        field: "province",
        type: "select",
        options: [
          "Ontario",
          "Quebec",
          "British Columbia",
          "Alberta",
          "Manitoba",
        ],
        required: true,
      },
      {
        title: "Postal Code",
        field: "postalCode",
        type: "text",
        placeholder: "A1A 1A1",
        errorMessage: "Invalid Postal Code",
        validate: (value: string) =>
          /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/.test(value),
        required: true,
      },
    ],
  },
};
