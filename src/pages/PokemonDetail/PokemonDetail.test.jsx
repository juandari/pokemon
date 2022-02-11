import { render, screen, act } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import PokemonDetail from '.'
import { pokemonDetailMock } from '@mocks'

/**
 * * Modal testing boilerplate
 */
let portalRoot = document.querySelector('.ReactModalPortal')
if (!portalRoot) {
  portalRoot = document.createElement('div')
  portalRoot.setAttribute('id', 'portal')
  document.body.appendChild(portalRoot)
}

test('render pokemon detail with the correct title and catch button', () => {
  render(
    <MockedProvider mocks={pokemonDetailMock} addTypename={false}>
      <PokemonDetail name="ivysaur" />
    </MockedProvider>
  )

  act(() => {
    new Promise((resolve) => setTimeout(resolve, 0))
  })

  const name = screen.getByRole('heading', { name: /ivysaur/i })

  expect(name).toBeInTheDocument()
})

test('render all stats', () => {
  render(
    <MockedProvider mocks={pokemonDetailMock} addTypename={false}>
      <PokemonDetail name="ivysaur" />
    </MockedProvider>
  )

  act(() => {
    new Promise((resolve) => setTimeout(resolve, 0))
  })

  const attack = screen.getByTestId('stats-attack')
  const defense = screen.getByTestId('stats-defense')
  const health = screen.getByTestId('stats-attack')

  expect(attack).toBeInTheDocument()
  expect(defense).toBeInTheDocument()
  expect(health).toBeInTheDocument()
})
