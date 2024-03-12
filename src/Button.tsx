type ButtonProps = {
  type: "submit" | "reset" | "button" | undefined;
  children: React.ReactNode;
  finalStep: boolean;
  actionFn: () => void;
};

export const Button = ({
  type,
  children,
  actionFn,
  finalStep,
}: Partial<ButtonProps>) => {
  const buttonStyle = {
    background: finalStep ? "blue" : "green",
    color: "white",
    padding: ".5rem 1rem",
    border: "none",
  };

  return (
    <button type={type} onClick={actionFn} style={buttonStyle}>
      {children}
    </button>
  );
};
