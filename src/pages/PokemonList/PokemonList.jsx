/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from 'react'
import Router from 'next/router'
import { gql, useLazyQuery } from '@apollo/client'

import LogoPokemon from '@components/Icons/LogoPokemon'
import IconGithub from '@components/Icons/IconGithub'
import Loader from '@components/Loader'
import { Column, Container } from '@components/StyledComponents'
import useLocalStorage from '@hooks/useLocalStoraga'

import { Dots, TitleWrapper } from './_PokemonList'
import InfiniteScroll from 'react-infinite-scroll-component'
import Button from '@components/Button'
import PokemonCard from '@components/PokemonCard'
import { IconWrapper } from '../PokemonDetail/_PokemonDetail'

export const GET_POKEMON_LIST = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      nextOffset
      prevOffset
      status
      message
      results {
        id
        url
        image
        name
      }
    }
  }
`

const LIMIT = 20
const OFFSET = 0

function PokemonList() {
  const [limit, setLimit] = useState(LIMIT)
  const [queryCount] = useLazyQuery(GET_POKEMON_LIST)
  const [queryPokemons, { loading, error }] = useLazyQuery(GET_POKEMON_LIST)

  const [pokemons, setPokemons] = useLocalStorage('pokemons', [])
  const [pokemonsSliced, setPokemonsSlices] = useState(pokemons)

  const [myPokemon] = useLocalStorage('my-pokemon', [])
  const [pokemonsCount, setPokemonsCount] = useState(0)

  // On first render, list should only be displaying 20 pokemons
  useEffect(() => {
    setPokemonsSlices(pokemons.slice(0, limit))
  }, [pokemons, limit])

  // This is to get the total count pokemons
  useEffect(() => {
    queryCount({
      variables: {
        limit: 1,
        offset: 1,
      },
      onCompleted: (res) => {
        setPokemonsCount(res.pokemons.count)
      },
    })
  }, [])

  // This is to store pokemons in local storage
  useEffect(() => {
    if (!pokemons.length) {
      queryPokemons({
        variables: {
          limit: pokemonsCount,
          offset: OFFSET,
        },
        onCompleted: (res) => {
          setPokemons(res.pokemons.results)
        },
      })
    }
  }, [pokemonsCount])

  const catchedPokemon = useMemo(() => {
    const result = []
    myPokemon.reduce(function (res, value) {
      if (!res[value.id]) {
        res[value.id] = { id: value.id, count: 0 }
        result.push(res[value.id])
      }
      res[value.id].count++
      return res
    }, {})
    return result
  }, [myPokemon])

  const fetchMoreData = () => {
    setLimit((prevLimit) => prevLimit + LIMIT)
    setPokemonsSlices(pokemons.slice(0, limit))
  }

  if (error) return <p>Error getting pokemon data. Please refresh the page.</p>

  return (
    <Container>
      <IconWrapper
        onClick={() => Router.push('https://github.com/juandari/pokemon')}
      >
        <IconGithub />
      </IconWrapper>
      <TitleWrapper>
        <LogoPokemon />
        <Button onClick={() => Router.push('/my-pokemon')}>My Pokemon</Button>
      </TitleWrapper>
      <InfiniteScroll
        dataLength={limit}
        next={fetchMoreData}
        hasMore={pokemonsSliced.length < pokemonsCount}
        loader={<Loader />}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        style={{ padding: '2em 1em' }}
      >
        <Column>
          {loading && <Loader />}
          {pokemonsSliced?.map((pokemon) => {
            const catched = catchedPokemon.find((mp) => mp.id === pokemon.id)
            return (
              <PokemonCard
                key={pokemon.id}
                image={pokemon.image}
                name={pokemon.name}
                onClick={() => Router.push('/' + pokemon.name)}
              >
                {catched?.count && <Dots>{catched.count}</Dots>}
              </PokemonCard>
            )
          })}
        </Column>
      </InfiniteScroll>
    </Container>
  )
}

export default PokemonList
