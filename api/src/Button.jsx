import React from "react";

export const Button = ({ onClick , title, className }) => {
//   return <button className={className}>Click here</button>;
  return <button onClick={onClick} className={className}>{title}</button>;
};
