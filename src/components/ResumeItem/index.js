import React from "react";
import * as C from "./styles";

const ResumeItem = ({ title, Icon, value, background, color, colorIcon }) => {
  return (
    <C.Container background={background}>
      <C.Header>
        <C.HeaderTitle color={color}>{title}</C.HeaderTitle>
        <Icon color={colorIcon} />
      </C.Header>
      <C.Total color={color}>{value}</C.Total>
    </C.Container>
  );
};

export default ResumeItem;
