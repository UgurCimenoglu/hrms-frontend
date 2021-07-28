import { useField } from "formik";
import React from "react";
import { Dropdown, FormField, Label } from "semantic-ui-react";

export default function UgurDropdown({ ...props }) {
  const [field, meta, helpers] = useField(props);
  const { setValue, setTouched, setError } = helpers;
  console.log(meta);

  return (<div>
      <Dropdown {...field} {...props} />
      {meta.error?(<div>meta.error</div>):null}
      </div>
  );
}
