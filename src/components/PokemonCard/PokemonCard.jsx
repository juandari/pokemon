import { capitalizeFirstLetter } from '@utils/helper'
import Image from 'next/image'
import React from 'react'
import { PokemonWrapper } from './_PokemonCard'

function PokemonCard({ image = '', name, children, ...restProps }) {
  return (
    <PokemonWrapper {...restProps}>
      <Image src={image} alt={name} width={80} height={80} />
      <h3>{capitalizeFirstLetter(name)}</h3>
      {children}
    </PokemonWrapper>
  )
}

export default PokemonCard
