import { FormDataProps } from "./App";
import FormWrapper from "./FormWrapper";

type AccountFormProps = {
  email: string;
  password: string;
  updateFields: (fields: Partial<FormDataProps>) => void;
};

export const AccountForm = ({
  email,
  password,
  updateFields,
}: AccountFormProps) => {
  return (
    <FormWrapper title="Account Details">
      <label>Email</label>
      <input
        type="email"
        autoFocus
        required
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <label>Password</label>
      <input
        type="password"
        required
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      />
    </FormWrapper>
  );
};
