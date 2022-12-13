import { MetaTags } from '@redwoodjs/web'

import FoobarCell from 'src/components/FoobarCell'

const TwoPage = () => {
  return (
    <>
      <MetaTags title="Two" description="Two page" />

      <FoobarCell />
    </>
  )
}

export default TwoPage
