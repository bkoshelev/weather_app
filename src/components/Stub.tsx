import styled from 'styled-components';

const Stub = styled.div`
  background-color: gray;
  filter: brightness(150%);
  border-radius: 25px;
  min-height: 90%;
  min-width: 90%;

  @keyframes waiting {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  animation: waiting 3s;
  animation-fill-mode: forwards;
  animation-direction: alternate-reverse;
`;

export default Stub;
