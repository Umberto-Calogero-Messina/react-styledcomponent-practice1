import {
  StyledCard,
  StyledCardH2,
  StyledCardp,
  StyledCardImg,
} from './Card.styles';

const Card = ({ border, title, subtitle }) => {
  return (
    <StyledCard $border={border}>
      <StyledCardH2>{title}</StyledCardH2>
      <StyledCardp>{subtitle}</StyledCardp>
      <StyledCardImg src={`asset/images/${title}.svg`}></StyledCardImg>
    </StyledCard>
  );
};

export default Card;
