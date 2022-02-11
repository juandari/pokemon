import { GET_POKEMON_DETAIL } from '../src/pages/PokemonDetail/PokemonDetail'

const mock = [
  {
    request: {
      query: GET_POKEMON_DETAIL,
      variables: {
        name: 'ivysaur',
      },
    },
    result: {
      data: {
        pokemon: {
          id: 2,
          name: 'ivysaur',
          height: 10,
          weight: 130,
          stats: [
            {
              base_stat: 60,
              stat: {
                name: 'hp',
              },
            },
            {
              base_stat: 62,
              stat: {
                name: 'attack',
              },
            },
            {
              base_stat: 63,
              stat: {
                name: 'defense',
              },
            },
            {
              base_stat: 80,
              stat: {
                name: 'special-attack',
              },
            },
            {
              base_stat: 80,
              stat: {
                name: 'special-defense',
              },
            },
            {
              base_stat: 60,
              stat: {
                name: 'speed',
              },
            },
          ],
          abilities: [
            {
              ability: {
                name: 'overgrow',
              },
            },
            {
              ability: {
                name: 'chlorophyll',
              },
            },
          ],
          sprites: {
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
          },
          types: [
            {
              type: {
                name: 'grass',
              },
            },
            {
              type: {
                name: 'poison',
              },
            },
          ],
          moves: [
            {
              move: {
                name: 'swords-dance',
              },
            },
            {
              move: {
                name: 'cut',
              },
            },
            {
              move: {
                name: 'bind',
              },
            },
            {
              move: {
                name: 'vine-whip',
              },
            },
            {
              move: {
                name: 'headbutt',
              },
            },
            {
              move: {
                name: 'tackle',
              },
            },
            {
              move: {
                name: 'body-slam',
              },
            },
            {
              move: {
                name: 'take-down',
              },
            },
            {
              move: {
                name: 'double-edge',
              },
            },
            {
              move: {
                name: 'growl',
              },
            },
            {
              move: {
                name: 'strength',
              },
            },
            {
              move: {
                name: 'mega-drain',
              },
            },
            {
              move: {
                name: 'leech-seed',
              },
            },
            {
              move: {
                name: 'growth',
              },
            },
            {
              move: {
                name: 'razor-leaf',
              },
            },
            {
              move: {
                name: 'solar-beam',
              },
            },
            {
              move: {
                name: 'poison-powder',
              },
            },
            {
              move: {
                name: 'sleep-powder',
              },
            },
            {
              move: {
                name: 'string-shot',
              },
            },
            {
              move: {
                name: 'toxic',
              },
            },
            {
              move: {
                name: 'rage',
              },
            },
            {
              move: {
                name: 'mimic',
              },
            },
            {
              move: {
                name: 'double-team',
              },
            },
            {
              move: {
                name: 'defense-curl',
              },
            },
            {
              move: {
                name: 'light-screen',
              },
            },
            {
              move: {
                name: 'reflect',
              },
            },
            {
              move: {
                name: 'bide',
              },
            },
            {
              move: {
                name: 'amnesia',
              },
            },
            {
              move: {
                name: 'flash',
              },
            },
            {
              move: {
                name: 'rest',
              },
            },
            {
              move: {
                name: 'substitute',
              },
            },
            {
              move: {
                name: 'snore',
              },
            },
            {
              move: {
                name: 'curse',
              },
            },
            {
              move: {
                name: 'protect',
              },
            },
            {
              move: {
                name: 'sludge-bomb',
              },
            },
            {
              move: {
                name: 'mud-slap',
              },
            },
            {
              move: {
                name: 'outrage',
              },
            },
            {
              move: {
                name: 'giga-drain',
              },
            },
            {
              move: {
                name: 'endure',
              },
            },
            {
              move: {
                name: 'charm',
              },
            },
            {
              move: {
                name: 'false-swipe',
              },
            },
            {
              move: {
                name: 'swagger',
              },
            },
            {
              move: {
                name: 'fury-cutter',
              },
            },
            {
              move: {
                name: 'attract',
              },
            },
            {
              move: {
                name: 'sleep-talk',
              },
            },
            {
              move: {
                name: 'return',
              },
            },
            {
              move: {
                name: 'frustration',
              },
            },
            {
              move: {
                name: 'safeguard',
              },
            },
            {
              move: {
                name: 'sweet-scent',
              },
            },
            {
              move: {
                name: 'synthesis',
              },
            },
            {
              move: {
                name: 'hidden-power',
              },
            },
            {
              move: {
                name: 'sunny-day',
              },
            },
            {
              move: {
                name: 'rock-smash',
              },
            },
            {
              move: {
                name: 'facade',
              },
            },
            {
              move: {
                name: 'nature-power',
              },
            },
            {
              move: {
                name: 'helping-hand',
              },
            },
            {
              move: {
                name: 'knock-off',
              },
            },
            {
              move: {
                name: 'secret-power',
              },
            },
            {
              move: {
                name: 'weather-ball',
              },
            },
            {
              move: {
                name: 'bullet-seed',
              },
            },
            {
              move: {
                name: 'magical-leaf',
              },
            },
            {
              move: {
                name: 'natural-gift',
              },
            },
            {
              move: {
                name: 'worry-seed',
              },
            },
            {
              move: {
                name: 'seed-bomb',
              },
            },
            {
              move: {
                name: 'energy-ball',
              },
            },
            {
              move: {
                name: 'leaf-storm',
              },
            },
            {
              move: {
                name: 'power-whip',
              },
            },
            {
              move: {
                name: 'captivate',
              },
            },
            {
              move: {
                name: 'grass-knot',
              },
            },
            {
              move: {
                name: 'venoshock',
              },
            },
            {
              move: {
                name: 'round',
              },
            },
            {
              move: {
                name: 'echoed-voice',
              },
            },
            {
              move: {
                name: 'grass-pledge',
              },
            },
            {
              move: {
                name: 'work-up',
              },
            },
            {
              move: {
                name: 'grassy-terrain',
              },
            },
            {
              move: {
                name: 'confide',
              },
            },
            {
              move: {
                name: 'grassy-glide',
              },
            },
          ],
        },
      },
    },
  },
]

export default mock
