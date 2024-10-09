import styled from 'styled-components';

const StyledCard = styled.div`
  position: relative;
  width: 311px;
  height: 222px;
  border: 1px solid #dadae5;
  border-top: 4px solid ${({ $border }) => $border};
  border-radius: 10px;
  margin: 85px 32px 75px 32px;
  display: flex;
  flex-direction: column;
  padding: 0px 28px;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 50%);
`;

const StyledCardH2 = styled.h2`
  padding-top: 15px;
  text-align: right;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #4d4f62;
`;

const StyledCardp = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  letter-spacing: 0.09px;
  line-height: 23px;
  font-weight: 400;
  color: #4d4f62;
  margin: 0;
`;

const StyledCardImg = styled.img`
  width: 57px;
  height: 57px;
  position: absolute;
  bottom: 25px;
  right: 25px;
`;

export { StyledCard, StyledCardH2, StyledCardp, StyledCardImg };
