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
        background={"#323238"}
        color={"#fff"}
        colorIcon={"#00b37e"}
      />
      <ResumeItem
        title="Saídas"
        Icon={FaRegArrowAltCircleDown}
        value={expense}
        background={"#323238"}
        color={"#fff"}
        colorIcon={"#f75a68"}
      />
      <ResumeItem 
        title="Total" 
        Icon={FaDollarSign} 
        value={total} 
        background={"#015f43"} 
        color={"#fff"}
        colorIcon={"#fff"}
      />
    </C.Container>
  );
};

export default Resume;
