import Head from 'next/head'
import PokemonList from '@pages/PokemonList'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pokemon App</title>
        <meta name="description" content="List of Pokemons" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <PokemonList />
      </main>
    </div>
  )
}
