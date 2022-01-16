import styled from 'styled-components';

export const WrapperStarRating = styled.div`
  display: flex;

  > svg {
    width: 18px;
    margin-top: 5px;
    color: var(--orange-50);
    opacity: 0.4;

    :nth-child(-n+${props => props.classification}) {
      opacity: 1;
    }
  }
`;
