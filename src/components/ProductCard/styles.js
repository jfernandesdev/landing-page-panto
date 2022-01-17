import styled from 'styled-components';

export const Card = styled.div`
  background: var(--white);
  height: 360px;
  width: 240px;
  border-radius: 20px;
  margin: 50px auto 0;
  cursor: pointer;

  :hover > div > button {
    -webkit-animation: pulse 1.5s infinite;
  }
`;

export const CardHeader = styled.div`
  background: var(--gray-100);
  height: 50%;
  position: relative;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const ImageProduct = styled.div`
  background: ${props =>
    props.image ? `url(${props.image}) no-repeat top center` : ''};
  background-size: contain;
  height: 200px;
  width: 200px;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  bottom: 5%;

  :before {
    content: '';
    position: absolute;
    width: 150.8px;
    height: 72.35px;
    left: 20%;
    bottom: 5px;
    background: rgba(0, 0, 0, 0.09);
    filter: blur(24.3715px);
  }
`;

export const CardBody = styled.div`
  padding: 8%;
  position: relative;
  height: 50%;
  overflow: hidden;

  button {
    position: absolute;
    right: 8%;
    bottom: 8%;

    :hover {
      -webkit-animation: pulse 1.5s infinite;
    }
  }
`;

export const TagCategory = styled.span`
  font-family: 'Inter', Arial, Helvetica, sans-serif;
  font-weight: normal;
  font-size: 13px;
  line-height: 20px;
  color: var(--gray-300);
`;

export const TitleProduct = styled.h3`
  font-family: 'Inter', Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 19px;
  line-height: 26px;
  text-transform: capitalize;
  color: var(--blue-dark);
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; 
`;

export const Price = styled.h4`
  font-family: 'Inter', Arial, Helvetica, sans-serif;
  font-weight: 600;
  font-size: 21px;
  color: var(--blue-dark);
  position: absolute;
  bottom: 10%;
  left: 8%;
  padding-left: 18px;

  > span {
    font-size: 10px;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
