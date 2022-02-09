import { useRouter } from 'next/router'
import { useState } from 'react'

function randomize(delay = 500) {
  return new Promise((res) => {
    setTimeout(() => {
      res(Math.random() > 0.5)
    }, delay)
  })
}

export function useCatchPokemon({ pokemonId, pokemonImage }) {
  const { query } = useRouter()
  const { id: name } = query
  const [status, setStatus] = useState('idle')
  const [isCatching, setCatching] = useState(false)

  useEffect(() => {
    if (isCatching) {
      randomize(500).then((result) => {
        setStatus(result ? 'success' : 'failed')
        setCatching(false)
      })
    }
  }, [isCatching])

  return { isCatching, status, setCatching }
}
