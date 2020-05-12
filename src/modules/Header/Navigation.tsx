import { IconButton } from '@material-ui/core'
import { Person, ShoppingCart } from '@material-ui/icons'
import type { SvgIconComponent } from '@material-ui/icons'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

import { Text } from 'common/UI'

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
`

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
`

const Description = styled(Text)`
  margin-left: 0.25rem;

  @media (min-width: 60rem) {
    display: none;
  }
`

const MENU: Array<{
  text: string
  href: string
  icon: SvgIconComponent
}> = [
  // TODO: Verify if the user is logged, if not, shows login button
  { text: 'Profile', icon: Person, href: '/profile' },
  { text: 'Shopping cart', icon: ShoppingCart, href: '/cart' },
]

const Navigation: React.FC = () => {
  return (
    <>
      <Menu>
        {MENU.map((item) => {
          return (
            <MenuItem key={item.href}>
              <Link href={item.href}>
                <IconButton aria-label={item.text} color="inherit">
                  <item.icon />
                  <Description color="white" weight="bold">
                    {item.text}
                  </Description>
                </IconButton>
              </Link>
            </MenuItem>
          )
        })}
      </Menu>
    </>
  )
}

export { Navigation }
