import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 1.5rem;
`;

const TabPanel: React.FC<{ index: number; value: number }> = ({
  children,
  index,
  value,
}) => {
  return (
    <div hidden={value !== index}>
      {value === index && <Wrapper>{children}</Wrapper>}
    </div>
  );
};

export { TabPanel };
