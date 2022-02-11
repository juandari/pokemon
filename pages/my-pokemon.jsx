import Head from 'next/head'
import MyPokemon from '@pages/MyPokemon'

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Pokemon</title>
        <meta name="description" content="List of Catched Pokemons" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <MyPokemon />
      </main>
    </div>
  )
}
