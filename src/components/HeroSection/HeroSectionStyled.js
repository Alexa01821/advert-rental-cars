import styled from 'styled-components';

const HeroSectionStyled = styled.section`
  max-width: 100vw;
  height: 436px;
  margin: 0 auto;
  background-color: var(--color-navy-blue);
  background-image: linear-gradient(
      rgba(46, 47, 66, 0.7),
      rgba(46, 47, 66, 0.7)
    ),
    url(https://ftp.goit.study/img/cars-test-task/volvo_xc90.jpeg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 112px 0;
`;

export default HeroSectionStyled;
