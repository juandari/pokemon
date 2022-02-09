import '../styles/globals.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { ThemeProvider } from '@emotion/react'
import { theme } from '@theme'

const client = new ApolloClient({
  uri: 'https://graphql-pokeapi.graphcdn.app/',
  cache: new InMemoryCache(),
})

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default MyApp
