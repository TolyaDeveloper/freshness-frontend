import { useState } from 'react'
import { Button, Arrow, Tag, Rating } from '~/components'

const Home = () => {
  const [rating, setRating] = useState(3)

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
      <Rating rating={0} />
      <Rating rating={rating} isEditable onSetRating={setRating} />
    </>
  )
}

export default Home
