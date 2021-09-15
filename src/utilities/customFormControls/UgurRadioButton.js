import { useField } from "formik";
import { FormField, Label, Radio } from "semantic-ui-react";

export default function UgurRadioButton({ ...props }) {
  const [field, meta] = useField(props);
  return (
    <FormField>
      <label>{props.placeholder}</label>
      <Radio {...field} {...props} />
      {meta.touched && !!meta.error ? (
        <Label basic color="red" pointing>
          {meta.error}
        </Label>
      ) : null}
    </FormField>
  );
}
