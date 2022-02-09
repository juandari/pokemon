import React from 'react'
import Image from 'next/image'

function LogoPokemon() {
  return (
    <Image
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"
      alt="pokemon logo"
      width={150}
      height={60}
    />
  )
}

export default LogoPokemon
