import React from "react";
import PropTypes from "prop-types";

const Label = ({ children, htmlFor = "", className = "" }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`inline-block text-sm font-medium cursor-pointer text-text2 ${className} darK:text-text3`}
    >
      {children}
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.node,
  htmlFor: PropTypes.string,
  className: PropTypes.string,
};
export default Label;
