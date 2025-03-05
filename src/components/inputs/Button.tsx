type ButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "red";
};

const Button = (props: ButtonProps) => {
  const baseClasses = `col-span-2 rounded px-4 py-2 font-bold text-white disabled:cursor-not-allowed disabled:bg-gray-300`;
  const primary = "bg-blue-500 text-white";
  const secondary = "bg-gray-500 text-white";
  const red = "bg-red-500 text-white";

  const buttonClasses = `${baseClasses} ${
    props.variant === "primary"
      ? primary
      : props.variant === "secondary"
        ? secondary
        : red
  }`;

  return (
    <button
      onClick={props.onClick}
      className={buttonClasses}
      disabled={props.disabled}
    >
      {props.label}
    </button>
  );
};

export default Button;
