import { Button, Arrow, Tag } from '~/components'

const Home = () => {
  return (
    <>
      <Button size="sm" variant="contained" type="button">
        button
      </Button>
      <Button size="md" variant="contained" type="button">
        button
      </Button>
      <Button size="lg" variant="contained" type="button">
        button
      </Button>
      <Button size="sm" variant="ghost" type="button">
        button
      </Button>
      <Button size="md" variant="ghost" type="button">
        button
      </Button>
      <Button size="lg" variant="ghost" type="button">
        button
      </Button>
      <Button size="sm" variant="outlined" type="button">
        button
      </Button>
      <Button size="md" variant="outlined" type="button">
        button
      </Button>
      <Button size="lg" variant="outlined" type="button">
        button
      </Button>
      <Button size="sm" variant="text" type="button">
        button
      </Button>
      <Button size="md" variant="text" type="button">
        button
      </Button>
      <Button size="lg" variant="text" type="button">
        button
      </Button>
      <Button
        size="lg"
        variant="text"
        endIcon={<Arrow orientation="down" />}
        type="submit"
      >
        button
      </Button>
      <Arrow color="black" orientation="up" />
      <Tag size="sm" variant="contained">
        -33%
      </Tag>
      <Tag size="md" variant="outlined">
        -33%
      </Tag>
      <Tag size="md" variant="ghost" isRemovable>
        -33%
      </Tag>
    </>
  )
}

export default Home
