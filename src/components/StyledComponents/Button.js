import styled from '@emotion/styled'

const Button = styled.button`
  padding: 0.5em 1em;
  border-radius: 5px;
  border-style: none;
  background-color: #2c3333;
  color: #f5f2e7;
  font-size: 1rem;
  transition: all 0.2s ease;
  &:hover {
    background-color: #395b64;
    cursor: pointer;
    transform: scale(1.03) translateY(-5px);
  }
  &:active {
    cursor: pointer;
    transform: scale(1) translateY(0px);
  }
`

export default Button
