import React, { useState } from "react";
import cx from "classnames";
import { Flex } from "@radix-ui/themes";
import { IoEye, IoEyeOff } from "react-icons/io5";

import { cn } from "src/utils/cn";

type IProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
  helperText?: string;
  containerClassName?: string;
  rightHelperText?: string;
  isShowPassword?: boolean;
};

const InputField = React.forwardRef<HTMLInputElement, IProps>(
  (
    {
      containerClassName,
      className,
      type,
      error,
      helperText,
      rightHelperText,
      isShowPassword,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div
        className={cx("w-full flex flex-col gap-1", {
          [containerClassName || ""]: containerClassName,
        })}>
        <Flex align="center" className="relative">
          <input
            type={isShowPassword ? (showPassword ? "text" : type) : type}
            className={cn(
              `flex h-12 w-full rounded-md border-2 border-gray1 bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 focus:border-blue-500 ${
                error ? "!border-red-400" : ""
              }`,
              className
            )}
            ref={ref}
            {...props}
          />
          {isShowPassword && (
            <div
              className="absolute right-5 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <IoEyeOff className="text-3xl" />
              ) : (
                <IoEye className="text-3xl" />
              )}
            </div>
          )}
        </Flex>
        <Flex align="center" justify="between">
          {helperText && (
            <p
              className={`mt-1 text-xs ${
                error ? "text-red-500" : "text-black"
              }`}>
              {helperText}
            </p>
          )}
          {rightHelperText && (
            <span className="text-xs text-blue1 ml-auto font-medium">
              {rightHelperText}
            </span>
          )}
        </Flex>
      </div>
    );
  }
);

InputField.displayName = "InputField";

export default InputField;
