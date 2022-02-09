import React, { useEffect, useMemo, useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import Router from 'next/router'

import LogoPokemon from '@components/Icons/LogoPokemon'
import { Container } from '@components/StyledComponents'
import Image from 'next/image'
import styled from '@emotion/styled'
import { capitalizeFirstLetter } from 'src/utils/helper'
import Loader from '@components/Loader'
import { useTheme } from '@emotion/react'
import IconBack from '@components/Icons/IconBack'
import IconAttack from '@components/Icons/IconAttack'
import IconShield from '@components/Icons/IconShield'
import IconHealth from '@components/Icons/IconHealth'
import Button from '@components/StyledComponents/Button'

export const GET_POKEMON_DETAIL = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      stats {
        base_stat
        stat {
          name
        }
      }
      abilities {
        ability {
          name
        }
      }
      sprites {
        front_default
      }
      types {
        type {
          name
        }
      }
      moves {
        move {
          name
        }
      }
    }
  }
`

const InfoWrapper = styled.div`
  align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Heading = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
`

const IconWrapper = styled.div`
  width: 40px;
  position: absolute;
  top: 25px;
  color: #395b64;
`

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`

const StatsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
`

const StatsCard = styled.div`
  padding: 1em;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background-color: white;
`

const Stats = styled.span`
  font-weight: bold;
  font-size: 2rem;
`

const MovesWrapper = styled.div`
  padding: 1em;
  border-radius: 20px;
  display: flex;
  gap: 0.75em;
  background-color: white;
  width: 100%;
  flex-wrap: wrap;
`

const MovesCard = styled.span`
  padding: 0.25em 1em;
  background-color: #f5f2e7;
  border-radius: 10px;
`

const IconStats = styled.div`
  width: 25px;
  color: ${(props) => props.color};
`

function randomize(delay = 500) {
  return new Promise((res) => {
    setTimeout(() => {
      res(Math.random() > 0.5)
    }, delay)
  })
}

function PokemonDetail({ name }) {
  const { typeColors } = useTheme()

  const { data, loading, error } = useQuery(GET_POKEMON_DETAIL, {
    variables: {
      name,
    },
  })

  const types = useMemo(() => {
    return data?.pokemon?.types?.map((item) => item.type.name)
  }, [data?.pokemon?.types])

  const handleBack = () => {
    Router.push('/')
  }

  /**
   * TODO: refactor to custom hook
   */
  const [status, setStatus] = useState('idle')
  const handleCatch = () => {
    randomize(500).then((result) => setStatus(result ? 'success' : 'failed'))
  }

  useEffect(() => {
    console.log(status, 'status')
  }, [status])

  const renderTypes = (types) => {
    if (!types?.length) return <Loader />

    if (types.length === 1) {
      return (
        <h4 style={{ color: typeColors[types[0]], marginTop: '0.2em' }}>
          {types[0].toUpperCase()}
        </h4>
      )
    }

    if (types.length === 2) {
      return (
        <h4 style={{ marginTop: '0.2em' }}>
          <span style={{ color: typeColors[types[0]], margin: 0 }}>
            {types[0].toUpperCase()}
          </span>{' '}
          +{' '}
          <span style={{ color: typeColors[types[1]], margin: 0 }}>
            {types[1].toUpperCase()}
          </span>
        </h4>
      )
    }
  }

  const renderMoves = (moves) => {
    return moves.map((item) => (
      <MovesCard key={item.move.name}>{item.move.name}</MovesCard>
    ))
  }

  console.log(data, 'data')

  return (
    <Container>
      <IconWrapper onClick={handleBack}>
        <IconBack />
      </IconWrapper>
      <Heading>
        <LogoPokemon />
      </Heading>
      <InfoWrapper>
        {loading ? (
          <Loader />
        ) : (
          <Image
            src={data?.pokemon?.sprites.front_default}
            width={240}
            height={240}
            alt={name}
          />
        )}
        <h3 style={{ fontSize: '2.5rem', color: '#395B64', margin: 0 }}>
          {name && capitalizeFirstLetter(name)}
        </h3>
        {renderTypes(types)}
      </InfoWrapper>

      <div style={{ textAlign: 'center' }}>
        <Button onClick={handleCatch}>Catch</Button>
      </div>

      <StatsWrapper>
        <StatsCard>
          <IconStats color="#feb800">
            <IconAttack />
          </IconStats>
          <span style={{ color: '#395B64' }}>Attack</span>
          <Stats>
            {
              data?.pokemon?.stats?.filter(
                (item) => item.stat.name === 'attack'
              )[0]?.base_stat
            }
          </Stats>
        </StatsCard>
        <StatsCard>
          <IconStats color="#68d3d4">
            <IconShield />
          </IconStats>
          <span style={{ color: '#395B64' }}>Defense</span>
          <Stats>
            {
              data?.pokemon?.stats?.filter(
                (item) => item.stat.name === 'defense'
              )[0]?.base_stat
            }
          </Stats>
        </StatsCard>
        <StatsCard>
          <IconStats color="#4cd3a3">
            <IconHealth />
          </IconStats>
          <span style={{ color: '#395B64' }}>Health</span>
          <Stats>
            {
              data?.pokemon?.stats?.filter((item) => item.stat.name === 'hp')[0]
                ?.base_stat
            }
          </Stats>
        </StatsCard>
      </StatsWrapper>
      <Content>
        <div>
          <h3
            style={{
              color: '#2C3333',
              fontSize: '1.5rem',
              marginLeft: '1em',
            }}
          >
            Moves
          </h3>
          <MovesWrapper>
            {loading ? <Loader /> : renderMoves(data.pokemon.moves)}
          </MovesWrapper>
        </div>
      </Content>
    </Container>
  )
}

export default PokemonDetail
