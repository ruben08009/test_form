import React from "react";
import { Controller, useFormContext } from "react-hook-form";

import { FormInputProps } from "./FormInputProps";
import TextField from "@material-ui/core/TextField";


export const InputText = ({ name, control, label }: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          helperText={error ? error.message : null}
          size="medium"
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          margin="normal"
          label={label}
          variant="outlined"
        />
      )}
    />
  );
  
};





