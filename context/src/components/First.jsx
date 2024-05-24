import React, { useContext } from "react";
import { ThemeContext } from "../context";

export const First = () => {
  const { mode } = useContext(ThemeContext);
  console.log(mode);

  return (
    <div>
      <h1>First</h1>
    </div>
  );
};
