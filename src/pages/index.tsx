import { Radio, Logo, Checkbox } from '~/components'
import Link from 'next/link'

const Home = () => {
  return (
    <>
      <Checkbox label="some text" />
      <Radio name="n" label="some label" />
      <Radio name="n" label="some label" />
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
    </>
  )
}

export default Home
