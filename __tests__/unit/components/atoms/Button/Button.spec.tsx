import { render, screen } from '@testing-library/react'
import { Button } from '~/components/atoms'

describe('[Button] atom', () => {
  it('[Button] atom should be rendered with correct children', () => {
    render(
      <Button size="sm" variant="solid" type="button">
        button
      </Button>
    )

    expect(screen.getByRole('button')).toContainHTML('button')
  })

  it('[Button] atom should be sm size and solid variant', () => {
    render(
      <Button size="sm" variant="solid" type="button">
        button
      </Button>
    )

    expect(screen.getByRole('button')).toHaveClass('button solid sm')
  })

  it('[Button] atom should be md size and soft variant', () => {
    render(
      <Button size="md" variant="soft" type="button">
        button
      </Button>
    )

    expect(screen.getByRole('button')).toHaveClass('button soft md')
  })

  it('[Button] atom should be lg size and plain variant', () => {
    render(
      <Button size="lg" variant="plain" type="button">
        button
      </Button>
    )

    expect(screen.getByRole('button')).toHaveClass('button plain lg')
  })

  it('[Button] atom should be lg size and outlined variant', () => {
    render(
      <Button size="lg" variant="outlined" type="button">
        button
      </Button>
    )

    expect(screen.getByRole('button')).toHaveClass('button outlined lg')
  })

  it('[Button] atom should be rendered with startAdornment', () => {
    render(
      <Button startAdornment="start adornment" type="button">
        button
      </Button>
    )

    expect(screen.getByRole('button')).toContainHTML(
      '<span class="startIcon">start adornment</span>'
    )
  })

  it('[Button] atom should be rendered with endAdornment', () => {
    render(
      <Button endAdornment="end adornment" type="button">
        button
      </Button>
    )

    expect(screen.getByRole('button')).toContainHTML(
      '<span class="endIcon">end adornment</span>'
    )
  })
})
