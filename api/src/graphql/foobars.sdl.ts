export const schema = gql`
  type Foobar {
    epoch: BigInt!
  }

  type Query {
    foobar: Foobar @skipAuth
  }
`
