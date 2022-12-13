import type { FindFoobarQuery, FindFoobarQueryVariables } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindFoobarQuery {
    foobar: foobar {
      epoch
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindFoobarQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  foobar,
}: CellSuccessProps<FindFoobarQuery, FindFoobarQueryVariables>) => {
  return <div>{JSON.stringify(foobar)}</div>
}
