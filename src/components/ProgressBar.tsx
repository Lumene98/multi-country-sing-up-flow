import { useEffect, useState } from "react";

const ProgressBar = ({ step }: { step: number }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress((step / 6) * 100);
  }, [step]);

  return (
    <div className="mb-4 h-2.5 w-full rounded-full bg-gray-200">
      <div
        className="h-2.5 rounded-full bg-blue-600 transition-all duration-500"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
