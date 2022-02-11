import styled from '@emotion/styled'

const Button = styled.button`
  padding: 0.5em 1em;
  border-radius: 5px;
  border-style: none;
  background-color: #2c3333;
  color: #f5f2e7;
  font-size: 1rem;
  transition: all 0.2s ease;
  &:disabled {
    background-color: grey;
    pointer-events: none;
  }
  &:hover {
    background-color: #395b64;
    cursor: ${(props) => (!props.noAnimation ? 'pointer' : 'default')};
    transform: ${(props) =>
      !props.noAnimation ? 'scale(1.03) translateY(-5px)' : 'none'};
  }
  &:active {
    cursor: pointer;
    transform: scale(1) translateY(0px);
  }
`

export default Button
