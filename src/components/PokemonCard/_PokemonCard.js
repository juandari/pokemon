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
    transform: ${(props) =>
      !props.noAnimation ? 'scale(1.03) translateY(-5px)' : 'none'};
    cursor: ${(props) => (!props.noAnimation ? 'pointer' : 'default')};
  }
`
