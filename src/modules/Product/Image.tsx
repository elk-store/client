import React from 'react';
import styled from 'styled-components';

const GalleryItem = styled.div`
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  padding: 1.25rem;
  min-height: 12rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Item = styled.img`
  height: auto;
  max-width: 100%;
`;

type ImageProps = {
  name?: string;
  picture?: string;
};

const Image = ({ name, picture }: ImageProps) => {
  return (
    <GalleryItem>
      <Item src={picture} alt={name} />
    </GalleryItem>
  );
};

export { Image };
