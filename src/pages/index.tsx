import {
  FormStyledWrapper,
  Input,
  Label,
  Checkbox,
  Radio,
  Select,
  Arrow,
  Tag
} from '~/components'
import EmailIcon from '~/assets/icons/email.svg'
import SearchIcon from '~/assets/icons/search.svg'

const Home = () => {
  return (
    <>
      <FormStyledWrapper>
        <Input
          type="password"
          placeholder="password"
          startAdornment={<EmailIcon />}
          endAdornment={<SearchIcon />}
        />
      </FormStyledWrapper>
      <Input
        placeholder="name"
        startAdornment={<EmailIcon />}
        endAdornment={<SearchIcon />}
      />
      <Label>ghfg</Label>
      <Checkbox />
      <Radio label="label" />
      <Select endAdornment={<Arrow orientation="down" />}>
        <option>Toyota</option>
        <option>Toyotadfgd</option>
      </Select>
      <Tag isRemovable variant="solid">
        Tag
      </Tag>
      <Tag isRemovable variant="soft">
        Tag
      </Tag>
      <Tag variant="outlined" href="/">
        Tag
      </Tag>
    </>
  )
}

export default Home
