import { render, screen } from '@testing-library/react'
import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('should render whit he marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Londrina',
      slug: 'londrina',
      location: {
        longitude: 0,
        latitude: 0
      }
    }
    render(<Map places={[place]} />)

    expect(screen.getByTitle(/londrina/i)).toBeInTheDocument()
  })
})
