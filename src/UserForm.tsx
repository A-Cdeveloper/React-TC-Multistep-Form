import { FormDataProps } from "./App";
import FormWrapper from "./FormWrapper";

type UserFormProps = {
  first_name: string;
  last_name: string;
  age: string;
  updateFields: (fields: Partial<FormDataProps>) => void;
};

export const UserForm = ({
  first_name,
  last_name,
  age,
  updateFields,
}: UserFormProps) => {
  return (
    <FormWrapper title="User Details">
      <label>First Name</label>
      <input
        type="text"
        autoFocus
        required
        value={first_name}
        onChange={(e) => updateFields({ first_name: e.target.value })}
      />
      <label>Last Name</label>
      <input
        type="text"
        required
        value={last_name}
        onChange={(e) => updateFields({ last_name: e.target.value })}
      />
      <label>Age</label>
      <input
        type="number"
        min={1}
        required
        value={age}
        onChange={(e) => updateFields({ age: e.target.value })}
      />
    </FormWrapper>
  );
};

export default UserForm;
