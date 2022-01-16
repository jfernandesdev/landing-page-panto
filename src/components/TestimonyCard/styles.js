import styled from 'styled-components';

export const CardImage = styled.div`
  background: ${props =>
    props.image ? `url(${props.image}) no-repeat bottom center` : ''};
  background-size: cover;
  height: 370px;
  max-width: 300px;
  margin: auto;
  border-radius: 20px;
  padding: 18px;
  display: flex;
  align-items: flex-end;
`;

export const CardContent = styled.div`
  background: var(--white);
  height: 50%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 30px 20px 18px;
  position: relative;

  ::before {
    content: '';
    z-index: 0;
    width: 66px;
    height: 66px;
    border-radius: 50%;
    position: absolute;
    background: var(--white);
    top: 0;
    transform: translate3d(0, -33px, 0);
  }

  > div {
    position: absolute;
    bottom: 10px;
  }
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  flex-shrink: 0;
  position: absolute;
  top: -25px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
`;

export const Title = styled.h5`
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  text-transform: capitalize;
  z-index: 1;
`;

export const Subtitle = styled.span`
  font-size: 12px;
  line-height: 14px;
  opacity: 0.6;
  margin: 5px 10px 5px;
`;

export const Description = styled.p`
  font-size: 12px;
  line-height: 16px;
  opacity: 0.8;
  margin: auto;
  min-height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
