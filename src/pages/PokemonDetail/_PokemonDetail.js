import styled from '@emotion/styled'

export const InfoWrapper = styled.div`
  align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Heading = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
`

export const IconWrapper = styled.div`
  position: absolute;
  top: 25px;
  color: #395b64;
  cursor: pointer;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`

export const StatsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
`

export const StatsCard = styled.div`
  padding: 1em;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background-color: white;
`

export const Stats = styled.span`
  font-weight: bold;
  font-size: 2rem;
`

export const MovesWrapper = styled.div`
  padding: 1em;
  border-radius: 20px;
  display: flex;
  gap: 0.75em;
  background-color: white;
  width: 100%;
  flex-wrap: wrap;
`

export const MovesCard = styled.span`
  padding: 0.25em 1em;
  background-color: #f5f2e7;
  border-radius: 10px;
`

export const IconStats = styled.div`
  width: 25px;
  color: ${(props) => props.color};
`
