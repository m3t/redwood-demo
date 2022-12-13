import type { QueryResolvers } from 'types/graphql'

export const foobar: QueryResolvers['foobar'] = () => ({ epoch: Date.now() })
