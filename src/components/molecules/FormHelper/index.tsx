import React, { FC, useCallback } from "react";
import { Controller } from "react-hook-form";

import { IFormHelper } from "src/types/form";

import InputField from "src/components/atoms/InputField";
import FormControl from "src/components/atoms/FormControl";

type IProps = {
  control?: any;
  form: IFormHelper;
};

const FormHelper: FC<IProps> = ({ control, form }) => {
  const renderLayout = useCallback(
    ({ field: { onChange, onBlur, value } }: any) => {
      let component = <></>;

      switch (form?.type) {
        case "input":
          component = (
            <InputField
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              error={!!form?.errorMessage}
              helperText={form?.errorMessage}
              {...form}
              {...form?.fieldProps}
            />
          );
          break;

        default:
          break;
      }

      return (
        <FormControl
          label={form?.label}
          name={form?.name}
          required={form?.required}>
          {component}
        </FormControl>
      );
    },
    [form]
  );

  return (
    <Controller
      name={form?.name || ""}
      control={control}
      render={renderLayout}
    />
  );
};

export default FormHelper;
