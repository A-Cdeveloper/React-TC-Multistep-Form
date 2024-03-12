import useMultistepForm from "./useMultistepForm";
import { UserForm } from "./UserForm";
import { AccountForm } from "./AccountForm";
import { AddressForm } from "./AddressForm";
import { useState } from "react";
import { Button } from "./Button";

export type FormDataProps = {
  first_name: string;
  last_name: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string | number;
  email: string;
  password: string;
};
const INITIAL_DATA: FormDataProps = {
  first_name: "",
  last_name: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};

function App() {
  const [data, setData] = useState<FormDataProps>(INITIAL_DATA);

  const updateFields = (fields: Partial<FormDataProps>) => {
    setData((prevData) => {
      return {
        ...prevData,
        ...fields,
      };
    });
  };

  const {
    currentStepIndex,
    currentStep,
    steps,
    next,
    back,
    isFirstStep,
    isLastStep,
  } = useMultistepForm([
    <UserForm {...data} updateFields={updateFields} />,
    <AddressForm {...data} updateFields={updateFields} />,
    <AccountForm {...data} updateFields={updateFields} />,
  ]);

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!isLastStep) {
      next();
    } else {
      alert(JSON.stringify(data, null, 3));
    }
  };

  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        borderRadius: ".5rem",
        padding: "2rem",
        margin: "1rem",
        fontFamily: "Verdana",
      }}
    >
      <form onSubmit={submitHandler}>
        <div style={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {currentStep}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            justifyContent: "flex-end",
            gap: "1rem",
          }}
        >
          {!isFirstStep && (
            <Button
              type="button"
              actionFn={() => {
                back();
              }}
            >
              Back
            </Button>
          )}

          <Button type="submit" finalStep={isLastStep}>
            {isLastStep ? "Finish" : "Next"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default App;
