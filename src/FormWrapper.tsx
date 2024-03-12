import { ReactNode } from "react";

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

const FormWrapper = ({ title, children }: FormWrapperProps) => {
  return (
    <>
      <h2 style={{ textAlign: "center", margin: 0, marginBottom: "2rem" }}>
        {title}
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(auto, 150px) minmax(auto, 400px)",
          justifyContent: "start",
          gap: "1rem .5rem",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default FormWrapper;
