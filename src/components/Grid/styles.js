import styled from "styled-components";

export const Table = styled.table`
  width: 98%;
  background-color: #29292e;
  padding: 20px;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  color: #fff;
`;

export const Thead = styled.thead`
  
`;

export const Tbody = styled.tbody`
  
`;

export const Tr = styled.tr`

`;

export const Th = styled.th`
  text-align: start;
  padding-bottom: 5px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width + "%" : "auto")};
`;
