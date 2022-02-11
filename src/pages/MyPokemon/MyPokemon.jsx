import React from 'react'
import Router from 'next/router'

import LogoPokemon from '@components/Icons/LogoPokemon'
import { Column, Container } from '@components/StyledComponents'
import useLocalStorage from '@hooks/useLocalStoraga'
import PokemonCard from '@components/PokemonCard'
import Button from '@components/Button'
import { IconWrapper } from '@pages/PokemonDetail/_PokemonDetail'
import IconBack from '@components/Icons/IconBack'

function MyPokemon() {
  const [myPokemon, setMyPokemon] = useLocalStorage('my-pokemon', [])

  const handleRemove = (pokemonNickname) => {
    const newPokemon = myPokemon.filter(
      (pokemon) => pokemon.nickname !== pokemonNickname
    )

    setMyPokemon(newPokemon)
  }

  return (
    <Container>
      <IconWrapper onClick={() => Router.push('/')}>
        <IconBack />
      </IconWrapper>
      <div style={{ alignSelf: 'center' }} onClick={() => Router.push('/')}>
        <LogoPokemon />
      </div>
      <Column style={{ marginTop: '3em' }}>
        {myPokemon.map((pokemon) => (
          <PokemonCard
            key={pokemon.nickname}
            image={pokemon.image}
            name={pokemon.name}
            noAnimation={true}
          >
            <p style={{ margin: '0 0 1em 0' }}>
              Nickname: <strong>{pokemon.nickname}</strong>
            </p>
            <Button onClick={() => handleRemove(pokemon.nickname)}>
              Remove
            </Button>
          </PokemonCard>
        ))}
      </Column>
    </Container>
  )
}

export default MyPokemon
