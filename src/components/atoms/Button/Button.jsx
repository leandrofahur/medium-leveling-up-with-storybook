import PropTypes from "prop-types";
import styles from "./Button.module.scss";

export default function Button(props) {
  const { variant, color, isDisabled, onClick, children } = props;
  const className = `${styles.btn} ${styles[variant]} ${styles[color]}`;

  return (
    <button
      className={className}
      disabled={isDisabled}
      onClick={!isDisabled ? onClick : undefined}
    >
      {children}
    </button>
  );
}
Button.propTypes = {
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),
  color: PropTypes.oneOf(["primary", "secondary"]),
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  variant: "contained",
  color: "primary",
  isDisabled: false,
  onClick: () => {},
  children: null,
};
