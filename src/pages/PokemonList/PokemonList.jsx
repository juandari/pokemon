import React from 'react'
import { gql, useQuery } from '@apollo/client'
import styled from '@emotion/styled'

import LogoPokemon from '@components/Icons/LogoPokemon'
import Image from 'next/image'
import Loader from '@components/Loader'

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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1em;
  gap: 3em;

  @media (min-width: 1024px) {
    padding: 1em 10em;
  }
`

const Column = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const PokemonWrapper = styled.div`
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

const Dots = styled.div`
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

function PokemonList() {
  const { data, loading, error } = useQuery(GET_POKEMON_LIST)
  const pokemons = data?.pokemons?.results

  return (
    <Container>
      <div style={{ alignSelf: 'center' }}>
        <LogoPokemon />
      </div>
      <Column>
        {loading && <Loader />}
        {pokemons?.map((pokemon) => (
          <PokemonWrapper key={pokemon.id}>
            <div>
              <Image
                src={pokemon.dreamworld}
                alt={pokemon.name}
                width={80}
                height={80}
              />
            </div>
            <h3>{pokemon.name}</h3>
            <Dots>2</Dots>
          </PokemonWrapper>
        ))}
      </Column>
    </Container>
  )
}

export default PokemonList
