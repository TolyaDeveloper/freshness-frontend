import { Button, Arrow, Tag } from '~/components'
import { useState } from 'react'

const Home = () => {
  const [tags, setTags] = useState([
    { id: 1, text: 'tag 1' },
    { id: 2, text: 'tag 2' },
    { id: 3, text: 'tag 3' }
  ])

  const handleRemove = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id))
  }

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
      <Tag variant="contained">gfdg</Tag>
      {tags.map(tag => (
        <Tag key={tag.id} isRemovable onRemoveTag={() => handleRemove(tag.id)}>
          {tag.text}
        </Tag>
      ))}
    </>
  )
}

export default Home
