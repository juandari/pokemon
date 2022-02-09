import styled from '@emotion/styled'

const Column = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export default Column
