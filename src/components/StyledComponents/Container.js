import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  padding: 1em;
  gap: 3em;

  @media (min-width: 1024px) {
    padding: 1em 10em;
  }
`

export default Container
