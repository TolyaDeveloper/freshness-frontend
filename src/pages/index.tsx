import {
  Checkbox,
  Radio,
  Logo,
  Input,
  FormStyledWrapper,
  Label,
  Rating
} from '~/components'
import Link from 'next/link'
import SearchIcon from '~/assets/icons/search.svg'
import EmailIcon from '~/assets/icons/email.svg'

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
