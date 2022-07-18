import {
  Checkbox,
  Radio,
  Logo,
  Input,
  FormStyledWrapper,
  Label,
  Rating,
  Select,
  Arrow
} from '~/components'
import Link from 'next/link'
import SearchIcon from '~/assets/icons/search.svg'
import EmailIcon from '~/assets/icons/email.svg'

import styles from './test.module.scss'

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
      <Label>label</Label>
      <Select
        className={styles.fgd}
        endAdornment={<Arrow orientation={'down'} color="black" />}
      >
        <option value="volvo">Volvo</option>
        <option value="volvo">Vo</option>
        <option value="volvo">Vohgfhfghgfhfghffgdgfd</option>
      </Select>
      <Rating rating={4} />
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}
      >
        <FormStyledWrapper>
          <Input placeholder="Input" startAdornment={<EmailIcon />} />
        </FormStyledWrapper>
        <FormStyledWrapper>
          <Input
            placeholder="Input"
            endAdornment={<SearchIcon />}
            startAdornment={<EmailIcon />}
          />
        </FormStyledWrapper>
      </div>
      <Input placeholder="sdfs" endAdornment={<SearchIcon />} />
    </>
  )
}

export default Home
