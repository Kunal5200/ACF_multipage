import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
      className={props.className}
        style={{
          backgroundColor: props.bg,
          color: props.color,
          padding: props.padding,
          margin: props.margin,
          width: props.width,
          height: props.height,
          border: props.border,
          borderRadius: props.rounded,
        }}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
