import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 20px auto;
  width: 98%;
  background-color: #015f43;
  box-shadow: 0px 0px 5px #00b37e;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 15px 0px;
  gap: 10px;

  svg {
    cursor: pointer;
    color: #fff
  }

  @media (max-width: 750px) {
    svg {
      padding-right: 10px;
      padding-left: 10px;
    }
    
  }
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 30px;
  color: #fff;
`;