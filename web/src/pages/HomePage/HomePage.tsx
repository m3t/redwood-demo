import { useEffect, useState } from 'react'

import { useApolloClient } from '@apollo/client'

import { MetaTags } from '@redwoodjs/web'

function useGraphQL(query) {
  const client = useApolloClient()
  const [data, setData] = useState(null)
  useEffect(() => {
    let ignore = false
    client.query({ query }).then((json) => {
      if (!ignore) {
        setData(json)
      }
    })
    return () => {
      ignore = true
    }
  }, [client, query])
  return data
}

const HomePage = () => {
  const QUERY = gql`
    {
      foobar {
        epoch
      }
    }
  `

  const result = useGraphQL(QUERY)

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <p>
        <code>{JSON.stringify(result)}</code>
      </p>
    </>
  )
}

export default HomePage
