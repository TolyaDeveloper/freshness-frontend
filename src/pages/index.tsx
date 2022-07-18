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
import { useState } from 'react'

const Home = () => {
  const [rat, setRat] = useState(4)
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
      <Select endAdornment={<Arrow orientation={'down'} color="black" />}>
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
      <FormStyledWrapper>
        <Select endAdornment={<Arrow orientation="down" color="green" />}>
          <option value="All categories">All categories</option>
          <option value="...">...</option>
          <option value="...">...</option>
        </Select>
        <Input
          endAdornment={
            <button>
              <SearchIcon />
            </button>
          }
          placeholder="Search Products, categories ..."
        />
      </FormStyledWrapper>
      <Checkbox label={<Rating rating={1} />} />
      <Checkbox label={<Rating rating={2} />} />
      <Checkbox label={<Rating rating={3} />} />
      <Checkbox label={<Rating rating={4} />} />
      <Checkbox label={<Rating rating={5} />} />
      <Rating rating={rat} isEditable onSetRating={setRat} />
    </>
  )
}

export default Home
