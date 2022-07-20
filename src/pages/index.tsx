import { Typography, Breadcrumbs, CustomLink, Arrow } from '~/components'

const Home = () => {
  return (
    <>
      <Typography variant="body1">Typography</Typography>
      <Typography variant="body2">Typography</Typography>
      <Typography variant="body3">Typography</Typography>
      <Typography variant="body4" component="div">
        Typography
      </Typography>
      <Typography variant="body5">Typography</Typography>
      <Typography variant="body6">Typography</Typography>
      <Typography variant="h1">Typography</Typography>
      <Typography variant="h2-xl">Typography</Typography>
      <Typography variant="h2-lg">Typography</Typography>
      <Typography variant="h2-md">Typography</Typography>
      <Typography variant="h2-sm">Typography</Typography>
      <Typography variant="h3">Typography</Typography>
      <Typography variant="h4">Typography</Typography>
      <Breadcrumbs aria-label="Breadcrumbs" separator="/">
        <Typography variant="body6" color="light-grey">
          Home
        </Typography>
        <Typography variant="body6" color="light-grey">
          Home
        </Typography>
        <Typography variant="body6" color="dark-grey">
          Home
        </Typography>
      </Breadcrumbs>
      <CustomLink href="/" endAdornment={<Arrow />}>
        Custom link
      </CustomLink>
    </>
  )
}

export default Home
