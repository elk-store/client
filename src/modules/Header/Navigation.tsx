import { IconButton } from '@material-ui/core';
import { Person, MeetingRoom } from '@material-ui/icons';
import Link from 'next/link';
import React, { useContext } from 'react';
import styled from 'styled-components';

import { AuthContext } from 'common/contexts';
import { Text } from 'common/UI';

const Menu = styled.nav`
  flex: none;
  display: flex;
  flex-direction: column;

  color: var(--color-white);

  margin-bottom: 2rem;

  @media (min-width: 60rem) {
    flex-direction: row-reverse;
    flex: 1;
    margin-left: 2rem;
    padding-left: 2rem;
    margin-bottom: 0;
  }
`;

const MenuItem = styled.span`
  opacity: 0.6;
  transition: all 0.2s ease;
  margin-right: 0.25rem;

  @media (hover: hover) {
    &:hover {
      opacity: 1;
    }
  }

  @media (max-width: 60rem) {
    opacity: 1;
    text-align: center;
    width: 100%;
    margin: 0.2rem 0;
  }
`;

const Description = styled(Text)<{ hide?: boolean }>`
  margin-left: 0.25rem;

  @media (min-width: 60rem) {
    display: ${({ hide = false }) => (hide ? 'none' : 'inherit')};
  }
`;

const Navigation: React.FC = () => {
  const { isAuthenticated, setToken } = useContext(AuthContext);

  const handleLogOut = () => {
    setToken('');
  };

  return (
    <>
      <Menu>
        {isAuthenticated && (
          <MenuItem onClick={handleLogOut}>
            <IconButton aria-label="Log out" color="inherit">
              <MeetingRoom />
              <Description color="white" weight="bold" hide={true}>
                Log out
              </Description>
            </IconButton>
          </MenuItem>
        )}

        <MenuItem>
          <Link href={isAuthenticated ? '/profile' : '/login'}>
            <IconButton
              aria-label={isAuthenticated ? '/profile' : '/login'}
              color="inherit"
            >
              <Person />
              <Description color="white" weight="bold">
                {isAuthenticated ? 'Profile' : 'Login'}
              </Description>
            </IconButton>
          </Link>
        </MenuItem>
      </Menu>
    </>
  );
};

export { Navigation };
