import { useState } from "react";
import Button from "./inputs/Button";

type UploadImageFormProps = {
  setValue: (field: string, value: string) => void;
  profileImage: string | null;
  handleNextStep: () => void;
  handleBackStep: () => void;
  clearForm: () => void;
};

const UploadImageForm = (props: UploadImageFormProps) => {
  const [profileImage, setProfileImage] = useState<string | null>(
    props.profileImage,
  );
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const img = new Image();
      img.onload = () => {
        if (img.width <= 600 && img.height <= 600 && file.size <= 1024 * 1024) {
          const url = URL.createObjectURL(file);
          setProfileImage(url);
          props.setValue("profileImage", url);
          setError(false);
        } else {
          setError(true);
          setErrorMessage(
            "Image must be less than 600x600 pixels and 1MB in size.",
          );
        }
      };
      img.src = URL.createObjectURL(file);
    }
  };

  return (
    <div className="space-y-4 rounded-md bg-white p-4 shadow-md">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
        id="profile-image-upload"
      />
      <label
        htmlFor="profile-image-upload"
        className="flex cursor-pointer flex-col items-center"
      >
        {profileImage ? (
          <img
            src={profileImage}
            alt="Profile"
            className="h-48 w-48 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-48 w-48 flex-col items-center justify-center border-2 border-dashed">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <p>Upload Image</p>
          </div>
        )}
      </label>
      {error && <p className="text-red-500">{errorMessage}</p>}
      <div className="flex space-x-2">
        <Button
          variant="secondary"
          label="Back"
          onClick={props.handleBackStep}
        ></Button>
        <Button
          variant="secondary"
          label="Clear"
          onClick={props.clearForm}
        ></Button>
        <Button
          label="Next"
          onClick={props.handleNextStep}
          disabled={!profileImage || error}
          variant="primary"
        ></Button>
      </div>
    </div>
  );
};

export default UploadImageForm;
