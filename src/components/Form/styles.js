import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 20px auto;
  width: 98%;
  background-color: #202024;
  
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  padding: 15px 0px;
  gap: 10px;

  @media (max-width: 750px) {
    display: grid;
  }
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: #fff;
`;

export const Input = styled.input`
  outline: none;
  margin-top: 5px;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 15px;
  border: 1px solid #121214;
  background-color: #121214;
  color: #fff
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;

  input {
    margin-left: 20px;
    margin-right: 5px;
    accent-color: #00b37e;
    margin-top: 0;
  }
`;

export const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  background-color: #00875f;
`;
