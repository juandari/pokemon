import PokemonDetail from '@pages/PokemonDetail'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

function DetailPage() {
  const router = useRouter()
  const { id: name } = router.query

  return (
    <div>
      <Head>
        <title>Pokemon - {name}</title>
        <meta name="description" content={name} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PokemonDetail name={name} />
    </div>
  )
}

export default DetailPage
