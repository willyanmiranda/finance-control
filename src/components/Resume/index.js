import React from "react";
import ResumeItem from "../ResumeItem";
import * as C from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

const Resume = ({ income, expense, total }) => {
  return (
    <C.Container>
      <ResumeItem
        title="Entradas"
        Icon={FaRegArrowAltCircleUp}
        value={income}
        background={"#38b000"}
        color={"#fff"}
      />
      <ResumeItem
        title="Saídas"
        Icon={FaRegArrowAltCircleDown}
        value={expense}
        background={"#ba181b"}
        color={"#fff"}
      />
      <ResumeItem title="Total" Icon={FaDollarSign} value={total} background={"#003f88"} color={"#fff"}/>
    </C.Container>
  );
};

export default Resume;
