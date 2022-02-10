import React, { useMemo } from 'react'
import Image from 'next/image'
import Router from 'next/router'
import { gql, useQuery } from '@apollo/client'

import LogoPokemon from '@components/Icons/LogoPokemon'
import Loader from '@components/Loader'
import { Column, Container } from '@components/StyledComponents'
import useLocalStorage from '@hooks/useLocalStoraga'

import { Dots, PokemonWrapper } from './_PokemonList'

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
        dreamworld
      }
    }
  }
`

function PokemonList() {
  const { data, loading, error } = useQuery(GET_POKEMON_LIST)
  const pokemons = data?.pokemons?.results
  const [myPokemon, setMyPokemon] = useLocalStorage('my-pokemon', [])
  console.log(myPokemon, 'myPokemon')

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
  console.log(catchedPokemon, 'catchedPokemon')

  if (error) return <p>Error getting pokemon data. Please refresh the page.</p>

  return (
    <Container>
      <div style={{ alignSelf: 'center' }}>
        <LogoPokemon />
      </div>
      <Column>
        {loading && <Loader />}
        {pokemons?.map((pokemon) => {
          const catched = catchedPokemon.find((mp) => mp.id === pokemon.id)
          return (
            <PokemonWrapper
              key={pokemon.id}
              onClick={() => Router.push('/' + pokemon.name)}
            >
              <Image
                src={pokemon.dreamworld}
                alt={pokemon.name}
                width={80}
                height={80}
              />
              <h3>{pokemon.name}</h3>
              {catched?.count && <Dots>{catched.count}</Dots>}
            </PokemonWrapper>
          )
        })}
      </Column>
    </Container>
  )
}

export default PokemonList
