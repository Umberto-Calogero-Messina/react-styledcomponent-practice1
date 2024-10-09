import styled from 'styled-components';

const StyledTitle = styled.header`
  text-align: center;
  width: 311px;
  height: 161px;
  margin: 85px 32px;
`;

const StyledTitleH2 = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: ${({ $weigth }) => ($weigth ? '600' : '200')};
  letter-spacing: 0.17px;
  color: #4d4f62;
  margin: 0;
`;

const StyledTitleP = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.1px;
  color: #4d4f62;
  margin-top: 7px;
`;

export { StyledTitle, StyledTitleH2, StyledTitleP };
