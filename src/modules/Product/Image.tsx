import React from 'react'
import styled from 'styled-components'

const GalleryItem = styled.div`
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2) !important;
`

const Item = styled.img`
  height: auto;
  max-width: 100%;
  vertical-align: middle;
`

const Image: React.FC = () => {
  return (
    <GalleryItem>
      <Item
        src="https://embryo-react.theironnetwork.org/static/media/a-1-a.57b3779d.jpg"
        alt="Laptop Backpack"
      />
    </GalleryItem>
  )
}

export { Image }
