import { Button, Arrow } from '~/components'

const Home = () => {
  return (
    <>
      <Button
        variant="contained"
        size="lg"
        startIcon={<Arrow orientation="left" color="white" />}
        endIcon={<Arrow orientation="right" color="white" />}
        disabled
      >
        Button
      </Button>
      <Button variant="outlined" endIcon={<Arrow />}>
        gfdgff
      </Button>
      <Arrow color="green" orientation="left" />
    </>
  )
}

export default Home
