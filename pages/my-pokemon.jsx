import Head from 'next/head'
import Mypokemon from '@pages/Mypokemon'

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Pokemon</title>
        <meta name="description" content="List of Catched Pokemons" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Mypokemon />
      </main>
    </div>
  )
}
