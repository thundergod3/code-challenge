import React, { FC, ReactNode } from "react";

type IProps = {
  label?: string;
  name?: string;
  required?: boolean;
  children: ReactNode;
};

const FormControl: FC<IProps> = ({ label, name, required, children }) => {
  return (
    <div className="w-full flex flex-col gap-2">
      {label ? (
        <span className="text-sm font-medium leading-6 text-dark1">
          {label} {required ? <span className="text-red-500">*</span> : null}
        </span>
      ) : null}
      {children}
    </div>
  );
};

export default FormControl;
