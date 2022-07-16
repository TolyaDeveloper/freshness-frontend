import { Radio, Logo, Checkbox } from '~/components'
import Link from 'next/link'
import Ic from '../../public/icon.svg'

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
      <Ic />
    </>
  )
}

export default Home
