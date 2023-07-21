import React from "react";
import ErrorComponent from "../common/ErrorComponent";
import { withErrorBoundary } from "react-error-boundary";
import { PropTypes } from "prop-types";

const ButtonGoogle = ({ text = "", onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-full py-4 mb-5 text-base font-semibold border border-strock gap-x-3 rounded-xl text-text2 dark:text-white dark:border-darkStroke"
    >
      <img srcSet="/icon-google.png 2x" alt="icon-google" />
      <span>{text}</span>
    </button>
  );
};

ButtonGoogle.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default withErrorBoundary(ButtonGoogle, {
  FallbackComponent: ErrorComponent,
});
