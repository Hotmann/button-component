import styles from "./styles.module.css";

type ButtonProps = {
  variant?: "outline" | "text" | "secondary";
  disableShadow?: boolean;
  disabled?: boolean;
  startIcon?: string;
  endIcon?: string;
  size?: string;
} & Omit<React.ComponentProps<"button">, "children">;

export const Button = ({
  variant,
  disableShadow,
  disabled,
  startIcon,
  endIcon,
  size,
  color,
  ...rest
}: ButtonProps) => {
  // Define default styles
  let style: React.CSSProperties = {};
  let hoverStyle: React.CSSProperties = {};

  // Update styles based on props
  if (disableShadow) {
    style = {
      ...style,
      boxShadow: "none",
      background: "rgba(61, 90, 254, 1)",
      color: "rgba(255, 255, 255, 1)",
    };
  }

  if (disabled) {
    style = {
      ...style,
      color: "rgba(158, 158, 158, 1)",
      cursor: "not-allowed",
    };
  }

  if (startIcon || endIcon) {
    style = {
      ...style,
      background: "rgba(41, 98, 255, 1)",
      color: "rgba(255, 255, 255, 1)",
      boxShadow: "0px 2px 3px 0px rgba(0, 49, 202, 0.2)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: "8px",
    };
  }
  if (endIcon) {
    style = { ...style, flexDirection: "row-reverse" };
  }

  if (size) {
    style = {
      ...style,
      background: "rgba(41, 98, 255, 1)",
      color: "rgba(255, 255, 255, 1)",
    };
  }

  if (size === "sm") {
    style = {
      ...style,
      padding: "6px 13px",
    };
  }
  if (size === "lg") {
    style = {
      ...style,
      padding: "11px 23px",
    };
  }

  if (color === "Primary") {
    style = {
      ...style,
      background: "rgba(41, 98, 255, 1)",
      color: "rgba(255, 255, 255, 1)",
      boxShadow: " 0px 2px 3px 0px rgba(41, 98, 255, 0.2)",
    };
    hoverStyle = {
      background: "rgba(0, 57, 203, 1)",
    };
  }

  if (color === "Secondary") {
    style = {
      ...style,
      background: "rgba(69, 90, 100, 1)",
      color: "rgba(255, 255, 255, 1)",
      boxShadow: "0px 2px 3px 0px rgba(69, 90, 100, 0.2)",
    };
    hoverStyle = {
      background: "rgba(28, 49, 58, 1)",
    };
  }

  if (color === "Danger") {
    style = {
      ...style,
      background: "rgba(211, 47, 47, 1)",
      color: "rgba(255, 255, 255, 1)",
      boxShadow: "0px 2px 3px 0px rgba(211, 47, 47, 0.2)",
    };

    hoverStyle = {
      background: "rgba(154, 0, 7, 1)",
    };
  }

  const renderIcon = () => {
    if (startIcon || endIcon) {
      return (
        <span className="material-icons" style={{ fontSize: "16px" }}>
          add_shopping_cart
        </span>
      );
    }
    return null;
  };

  const Text = () => {
    if (color) {
      return color;
    } else if (disabled) {
      return "Disabled";
    } else {
      return "Default";
    }
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Apply hover styles on mouse enter
    e.currentTarget.style.backgroundColor = hoverStyle.background as string;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Reset styles on mouse leave
    e.currentTarget.style.backgroundColor = style.background as string;
  };
  return (
    <button
      className={`${styles.button} ${variant ? styles[variant!] : ""}`}
      style={style}
      {...rest}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {renderIcon()}
      {Text()}
    </button>
  );
};
