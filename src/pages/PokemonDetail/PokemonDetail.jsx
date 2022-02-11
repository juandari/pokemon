import React, { useMemo, useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import Router from 'next/router'
import Image from 'next/image'

import LogoPokemon from '@components/Icons/LogoPokemon'
import { Container } from '@components/StyledComponents'
import Loader from '@components/Loader'
import { useTheme } from '@emotion/react'
import IconBack from '@components/Icons/IconBack'
import IconAttack from '@components/Icons/IconAttack'
import IconShield from '@components/Icons/IconShield'
import IconHealth from '@components/Icons/IconHealth'
import Button from '@components/Button'
import Modal from '@components/Modal'
import Input from '@components/Input'

import { capitalizeFirstLetter, randomize } from '@utils/helper'
import useLocalStorage from '@hooks/useLocalStoraga'

import {
  Content,
  Heading,
  IconStats,
  IconWrapper,
  InfoWrapper,
  MovesCard,
  MovesWrapper,
  Stats,
  StatsCard,
  StatsWrapper,
} from './_PokemonDetail'

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

function PokemonDetail({ name }) {
  const { typeColors } = useTheme()
  const { data, loading, error } = useQuery(GET_POKEMON_DETAIL, {
    variables: {
      name,
    },
  })

  const [nickname, setNickname] = useState('')
  const [myPokemon, setMyPokemon] = useLocalStorage('my-pokemon', [])

  const types = useMemo(() => {
    return data?.pokemon?.types?.map((item) => item.type.name)
  }, [data?.pokemon?.types])

  const [status, setStatus] = useState('idle')
  const handleCatch = () => {
    setStatus('loading')
    randomize(500).then((result) => setStatus(result ? 'success' : 'failed'))
  }

  const [nicknameError, setNicknameError] = useState('')
  const handleSubmitNickname = (e) => {
    e.preventDefault()

    const nicknameExisted = myPokemon.find(
      (pokemon) => pokemon.nickname === nickname
    )

    if (!nicknameExisted) {
      setMyPokemon((myPokemon) => [
        ...myPokemon,
        {
          id: data?.pokemon.id,
          name,
          image: data?.pokemon.sprites.front_default,
          nickname,
        },
      ])
      setNickname('')
      setStatus('idle')
    } else {
      setNicknameError('Nickname already exists')
    }
  }

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

  if (error) return <p>Error getting pokemon. Please refresh the page</p>

  return (
    <Container>
      <IconWrapper onClick={() => Router.push('/')}>
        <IconBack />
      </IconWrapper>
      <Heading onClick={() => Router.push('/')}>
        <LogoPokemon />
      </Heading>
      <InfoWrapper>
        {loading ? (
          <Loader />
        ) : (
          <Image
            src={data?.pokemon?.sprites?.front_default}
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
        {status === 'loading' || loading ? (
          <Loader />
        ) : (
          <Button onClick={handleCatch}>Catch</Button>
        )}
      </div>

      {/* FAILED CATCH MODAL */}
      <Modal isOpen={status === 'failed'}>
        <h4 style={{ margin: 0, color: '#f25287' }}>Failed</h4>
        <p>
          Catching <strong>{name && capitalizeFirstLetter(name)}</strong> failed
        </p>
        <div style={{ display: 'flex', gap: '0.5em' }}>
          <Button onClick={handleCatch}>Try Again</Button>
          <Button onClick={() => setStatus('idle')}>Close</Button>
        </div>
      </Modal>

      {/* SUCCESS CATCH MODAL */}
      <Modal isOpen={status === 'success'}>
        <h4 style={{ margin: 0, color: '#8BDB81' }}>Success</h4>
        <p>
          Catching <strong>{name && capitalizeFirstLetter(name)}</strong>{' '}
          successful
        </p>
        <form
          onSubmit={handleSubmitNickname}
          style={{ display: 'flex', gap: '0.5em', alignItems: 'flex-start' }}
        >
          <Input
            placeholder="Nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            error={nicknameError}
          />
          <Button type="submit" disabled={!nickname}>
            Submit
          </Button>
        </form>
      </Modal>

      <StatsWrapper>
        <StatsCard>
          <IconStats color="#feb800">
            <IconAttack />
          </IconStats>
          <span style={{ color: '#395B64' }}>Attack</span>
          <Stats data-testid="stats-attack">
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
          <Stats data-testid="stats-defense">
            {
              data?.pokemon?.stats?.filter(
                (item) => item.stat.name === 'defense'
              )[0]?.base_stat
            }
          </Stats>
        </StatsCard>
        <StatsCard data-testid="stats-health">
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
