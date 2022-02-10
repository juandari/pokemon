import styled from '@emotion/styled'

export const PokemonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #dddddd;
  padding: 1em;
  border-radius: 1rem;
  transition: all 0.2s ease;
  position: relative;
  &:hover {
    transform: scale(1.03) translateY(-10px);
    cursor: pointer;
  }
`

export const Dots = styled.div`
  width: 30px;
  height: 30px;
  background-color: #f25287;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  top: -10px;
  right: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`
