import React from "react";
import PropTypes from "prop-types";
import ErrorComponent from "../common/ErrorComponent";
import { withErrorBoundary } from "react-error-boundary";
import { useController } from "react-hook-form";

const Input = ({
  control,
  type = "text",
  name,
  error = "",
  children,
  placeholder = "",
  ...rest
}) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <div className="relative">
      <input
        id={name}
        type={type}
        className={`w-full px-6 py-4 text-sm font-medium border rounded-xl  placeholder:text-text4 bg-transparent dark:placeholder:text-text2 dark:text-white ${
          error.length > 0
            ? "border-error text-error"
            : "border-strock dark:border-darkStroke text-text1"
        } ${children ? "pr-16" : ""}`}
        placeholder={error.length > 0 ? "" : placeholder}
        {...rest}
        {...field}
      />
      {error.length > 0 && (
        <p className="text-sm font-medium text-error pointer-events-none absolute left-6 -translate-y-2/4 top-2/4 error-input">
          {error}
        </p>
      )}
      {children && (
        <span className="absolute right-6 top-2/4 -translate-y-2/4 cursor-pointer select-none">
          {children}
        </span>
      )}
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  control: PropTypes.any.isRequired,
  error: PropTypes.string,
  children: PropTypes.node,
};

export default withErrorBoundary(Input, {
  FallbackComponent: ErrorComponent,
});
