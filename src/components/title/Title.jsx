import { StyledTitle, StyledTitleH2, StyledTitleP } from './Title.styles';

const Title = ({ title, title2, subtitle }) => {
  return (
    <StyledTitle>
      <StyledTitleH2>{title}</StyledTitleH2>
      <StyledTitleH2 $weigth>{title2}</StyledTitleH2>
      <StyledTitleP>{subtitle}</StyledTitleP>
    </StyledTitle>
  );
};

export default Title;
