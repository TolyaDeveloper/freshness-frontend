import {
  FormStyledWrapper,
  Input,
  Label,
  Checkbox,
  Radio,
  Select,
  Arrow,
  Tag,
  Typography
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
      <Typography level="body1">Text</Typography>
      <Typography level="body2">Text</Typography>
      <Typography level="body3">Text</Typography>
      <Typography level="body4">Text</Typography>
      <Typography level="body5">Text</Typography>
      <Typography level="body6">Text</Typography>
      <Typography level="h1">Text</Typography>
      <Typography level="h2-xl">Text</Typography>
      <Typography level="h2-lg">Text</Typography>
      <Typography level="h2-md">Text</Typography>
      <Typography level="h2-sm">Text</Typography>
      <Typography level="h3">Text</Typography>
      <Typography level="h4" color="secondary" component="cite">
        Text
      </Typography>
    </>
  )
}

export default Home
