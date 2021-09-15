import { useField } from "formik";
import { Dropdown, FormField, Label } from "semantic-ui-react";

export default function UgurDropdownMenu({ ...props }) {
  const [field, meta] = useField(props);
  console.log({field})

  return (
    <FormField>
      <label>{props.placeholder}</label>
      <Dropdown {...field} {...props}/>
      {meta.touched && !!meta.error ? (
        <Label basic color="red" pointing>
          {meta.error}
        </Label>
      ) : null}
    </FormField>
  );
}
