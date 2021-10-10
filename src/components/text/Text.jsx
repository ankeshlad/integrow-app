import React from "react";

const Text = ({ title, fontSize, color, fontWeight, margin, marginTop, marginLeft, marginRight, float, textDecorationLine }) => (
  <p style={{ fontSize: fontSize, color: color, fontWeight: fontWeight, margin:margin, marginTop, float, marginLeft, textDecorationLine, marginRight}}>
    {title}
  </p>
);

export default Text;
